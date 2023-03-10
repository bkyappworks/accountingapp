# request handler
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Account
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Account

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


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'account_number', 'current_balance')

def get_account_list(request):
    # accounts = Account.objects.all()
    accounts = Account(0,'1234567891011121',100)
    # user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
    data = AccountSerializer(accounts).data
    print("JsonResponse(data): ",data)
    return JsonResponse(data)
