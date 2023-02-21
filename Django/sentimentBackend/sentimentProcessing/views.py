from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core import serializers
import json

from keras.models import load_model 

# Defining model constant
MODEL_CONST = load_model("../../Model/Final_model.hdf5")

# Create your views here.

@csrf_exempt
@require_POST
def process_sentiment(request):
    data = json.loads(request.body)

    # Process sentiment
    sentiment = sentiment_prediction(data)

    # Serialize the processed data to JSON
    response = {"sentiment":f"{sentiment}"}

    # Return a JSON response with the processed data
    return JsonResponse(response)


def sentiment_prediction(data):
    # gets attribute from json
    data = data["cleanedText"]
    predictionArr = []
    dataArr = []

    # Convert data into integers and place into new array
    for index in data:
        index = int(index)
        dataArr.append(index)

    # Convert Array to 2d array
    predictionArr.append(dataArr)

    # Makes a predicition returning a 3 index array
    predicted_sentiment = MODEL_CONST.predict(predictionArr)

    # Sentiment decision logic

    # if first item is greater than second and is greater than third
    if predicted_sentiment[0][0] > predicted_sentiment[0][1] and predicted_sentiment[0][0] > predicted_sentiment[0][2]:
        return 0
    # If first item is less than second and second is greater than third
    elif predicted_sentiment[0][1] > predicted_sentiment[0][0] and predicted_sentiment[0][1] > predicted_sentiment[0][2]:
        return 1
    else:
        return 2
    