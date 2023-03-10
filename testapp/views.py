# request handler
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.
def cal():
    x = 1
    y = 2
    return x

def say_hello(request):
    x = cal()
    return HttpResponse('Hello World')

def json_view(request):
    data = {
        'name': 'John',
        'age': 30,
        'city': 'New York'
    }
    return JsonResponse(data)

