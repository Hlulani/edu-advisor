from rest_framework import serializers
from .models import User, Questionnaire


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
        
class QuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionnaire
        fields = ('id', 'name', 'born', 'education', 'fields', 'location', 'region', 'distance', 'budget', 'language', 'accessibility', 'hobbies')  
