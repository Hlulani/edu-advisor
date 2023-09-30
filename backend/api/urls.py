from django.urls import path
from .views import registration, login, save_questionnaire

urlpatterns = [
    path('register/', registration, name='register'),
    path('login/', login, name='login'),
    path('questionnarie/', save_questionnaire,name='questionnarie'),
]