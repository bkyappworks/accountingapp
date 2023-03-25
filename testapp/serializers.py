from rest_framework import serializers
from .models import Account, Transaction

# add user
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        # specify which model should be serialized
        model = Account
        # which fields should be included in the serialized output
        fields = ('id', 'account_number', 'current_balance','user')

# add account
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        # specify which model should be serialized
        model = Transaction
        # which fields should be included in the serialized output
        fields = ('id', 'date', 'transaction_type','note','amount')