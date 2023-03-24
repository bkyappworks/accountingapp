# from django.test import TestCase

# Create your tests here.
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'accountingapp.settings')  # <-- Replace "myproject" with your project's name
django.setup()
from django.contrib.auth.models import User
from testapp.models import Account, Transaction

# Create a test user
# user = User.objects.create_user(username='testuser', password='password')


# The following can only be run once

# Create test accounts

# Account.objects.create(account_number='1234567890', current_balance=1000.00)
# Account.objects.create(account_number='0987654321', current_balance=500.00)

# Create test transactions
Transaction.objects.create(date='2021-01-01', transaction_type='CREDIT', note='test', amount=100.00, account=Account.objects.get(account_number='1234567890'))
