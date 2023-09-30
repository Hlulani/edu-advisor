from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50),
    email = models.EmailField(unique=True),
    age = models.IntegerField()
    password = models.CharField(max_length=255)
    
    
class Questionnaire(models.Model): 
    name = models.CharField(max_length=255)
    born = models.IntegerField()
    education = models.IntegerField()
    fields = models.IntegerField()
    location = models.IntegerField()
    region = models.IntegerField()
    distance = models.IntegerField()
    budget= models.IntegerField()
    language = models.IntegerField()
    accessibility = models.IntegerField()
    hobbies = models.IntegerField()