# from django.test import TestCase

# Create your tests here.
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'accountingapp.settings')  # <-- Replace "myproject" with your project's name
django.setup()
from django.contrib.auth.models import User
from testapp.models import Account, Transaction

from testapp.serializers import AccountSerializer, TransactionSerializer
from django.http import JsonResponse

import requests
import json
from django.middleware.csrf import get_token
from django.test import RequestFactory

def get_accounts(request = None):

    login_user = User.objects.get(id='2')

    # Retrieve the related accounts using the accounts attribute of the UserProfile instance
    # accounts = Account.objects.filter(user=login_user)
    
    accounts = Account.objects.filter(user_id=login_user.id) 

    # Serialize the accounts queryset into JSON
    for account in accounts:
        account_number = account.account_number
        print("account_number: ",account_number)
        account_info = AccountSerializer(account).data
        print("account_info: ",account_info)

    account_list = AccountSerializer(accounts, many=True).data
    print("account_list: ",account_list)

    # Return the serialized account list as JSON
    return JsonResponse(account_list, safe=False)

def get_transactions(request = None):

    # transactions = Transaction.objects.filter(account_id=request.account.id) 
    transactions = Transaction.objects.filter(account_id='1') 
    print("transactions: ",transactions)
    transaction_list = TransactionSerializer(transactions, many=True).data
    print("transaction_list: ",transaction_list)

    # Return the serialized account list as JSON
    return JsonResponse(transaction_list, safe=False)

if __name__ == "__main__":
    # test
    # # https://stackoverflow.com/questions/13147914/how-to-simulate-http-post-request-using-python-requests-module
        URL = 'http://127.0.0.1:8000/testapp/login/'
        payload = {
        'username': 'testuser1',
        'password': 'password1',
        'persistent': '1'  # remember me
        }

        # session = requests.session()
        response = requests.post(URL, data=payload)
        print("response: ",response)

        # end test
        
#     get_accounts()
    # get_transactions()

# The following can only be run once

# Create a test user
# user1 = User.objects.create_user(username='testuser1', password='password1')
# user2 = User.objects.create_user(username='testuser2', password='password2')
# user3 = User.objects.create_user(username='testuser3', password='password3')
# user123 = User.objects.create_user(username='testuser123', password='password123')

# Create test accounts

# Account.objects.create(account_number='1234567890', current_balance=1000.00,user = user1)
# Account.objects.create(account_number='0987654321', current_balance=500.00,user = user1)
# Account.objects.create(account_number='0987654322', current_balance=10.00,user = user3)
# Account.objects.create(account_number='0987654323', current_balance=1.00,user = user123)


# Create test transactions
# Transaction.objects.create(date='2021-01-01', transaction_type='CREDIT', note='test', amount=100.00, account=Account.objects.get(account_number='1234567890'))
# Transaction.objects.create(date='2021-01-01', transaction_type='CREDIT', note='test', amount=200.00, account=Account.objects.get(account_number='0987654321'))
