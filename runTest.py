# from django.test import TestCase

# Create your tests here.
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'accountingapp.settings')  # <-- Replace "myproject" with your project's name
django.setup()
from django.contrib.auth.models import User
from testapp.models import Account, Transaction

login_user = User.objects.get(id='4')

# Retrieve the related accounts using the accounts attribute of the UserProfile instance
# accounts = Account.objects.filter(user=login_user)
from testapp.serializers import AccountSerializer
from django.http import JsonResponse
accounts = Account.objects.filter(user_id=login_user.id) 
serializer = AccountSerializer(accounts, many=True).data
# print(JsonResponse(serializer, safe=False)) # <JsonResponse status_code=200, "application/json">

# # Serialize the accounts queryset into JSON
for account in accounts:
    account_number = account.account_number
    print("account_number: ",account_number)
    account_info = AccountSerializer(account).data
    print("account_info: ",account_info)

# account_list = AccountSerializer(accounts).data

# # # Return the serialized account list as JSON
# print(JsonResponse(account_list, safe=False))

# The following can only be run once

# Create a test user
# user1 = User.objects.create_user(username='testuser1', password='password1')
# user2 = User.objects.create_user(username='testuser2', password='password2')
# user3 = User.objects.create_user(username='testuser3', password='password3')

# Create test accounts

# Account.objects.create(account_number='1234567890', current_balance=1000.00,user = user1)
# Account.objects.create(account_number='0987654321', current_balance=500.00,user = user1)
# Account.objects.create(account_number='0987654322', current_balance=10.00,user = user3)

# Create test transactions
# Transaction.objects.create(date='2021-01-01', transaction_type='CREDIT', note='test', amount=100.00, account=Account.objects.get(account_number='1234567890'))
# Transaction.objects.create(date='2021-01-01', transaction_type='CREDIT', note='test', amount=200.00, account=Account.objects.get(account_number='0987654321'))
