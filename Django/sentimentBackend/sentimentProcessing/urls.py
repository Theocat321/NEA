from .views import process_sentiment
from django.urls import path

urlpatterns = [
    path('process_sentiment/', process_sentiment),
]