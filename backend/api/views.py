from django.shortcuts import render
import pyrebase
from .models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from .serializer import UserSerializer, QuestionnaireSerializer
from django.views.decorators.csrf import csrf_exempt
from firebase_admin import firestore
from . import firebase_config
from .firebase_config import firebase_admin, cred






config={
  "apiKey": "AIzaSyAiWmm98QouWCTjN0bj2jUt3CvgkEAV1YA",
  "authDomain": "edu-advisor-5c99b.firebaseapp.com",
  "databaseURL": "https://edu-advisor-5c99b-default-rtdb.europe-west1.firebasedatabase.app",
  "projectId": "edu-advisor-5c99b",
  "storageBucket": "edu-advisor-5c99b.appspot.com",
  "messagingSenderId": "385967021219",
  "appId": "1:385967021219:web:56462720f98969db2e7316",
  "measurementId": "G-13FYT536LG",
}

#here we are doing firebase authentication
firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()
@api_view(['POST'])
@permission_classes([AllowAny])
def registration(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = User.objects.filter(username=username).first()

        if user is None or not user.check_password(password):
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = UserSerializer(user)
        return Response(serializer.data)
      
      
db = firebase_admin.firestore.client() 
@api_view(['POST'])
def save_questionnaire(request):
    if request.method == 'POST':
        serializer = QuestionnaireSerializer(data=request.data)
        if serializer.is_valid():
            # Save data to Django database
            serializer.save()

            # Save data to Firebase Firestore
            questionnaire_data = serializer.data
            questionnaire_ref = db.collection('questionnaires').document()
            questionnaire_ref.set(questionnaire_data)  # Save data to Firestore

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
