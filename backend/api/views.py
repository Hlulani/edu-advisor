from django.shortcuts import render
import pyrebase

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



def index(request):
        #accessing our firebase data and storing it in a variable
        name = database.child('Data').child('Name').get().val()
        stack = database.child('Data').child('Stack').get().val()
        framework = database.child('Data').child('Framework').get().val()

        context = {
            'name':name,
            'stack':stack,
            'framework':framework
        }
        return render(request, 'index.html', context)

