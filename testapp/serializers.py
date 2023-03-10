from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        # specify which model should be serialized
        model = Account
        # which fields should be included in the serialized output
        fields = ('id', 'account_number', 'current_balance')