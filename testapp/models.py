from django.conf import settings
from django.db import models
from django.contrib.auth.models import User, AbstractUser
# import json

# Create your models here.
# class User(AbstractUser):
#     pass

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    account_number = models.CharField(max_length=16, unique=True)
    current_balance = models.DecimalField(max_digits=10, decimal_places=2)
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='accounts')
    
    def __str__(self):
        return self.account_number

# class UserProfile(AbstractUser):
#     REQUIRED_FIELDS = ['email']
#     # one userprofile only link with one user
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
#     # refered in user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
#     account_set = models.ManyToManyField(Account)

class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    TRANSACTION_TYPES = (
        ('CREDIT', 'Credit'),
        ('DEBIT', 'Debit'),
    )
    transaction_type = models.CharField(max_length=6, choices=TRANSACTION_TYPES)
    note = models.CharField(max_length=255, null=True, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

# class UserProfile(models.Model):
    # one userprofile only link with one user
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    # refered in user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    # accounts = models.ManyToManyField(Account)

    # def __str__(self):
    #     return self.user.username
