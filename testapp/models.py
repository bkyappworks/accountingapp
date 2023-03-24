from django.db import models
from django.contrib.auth.models import User, AbstractUser
# import json

# Create your models here.
# class User(AbstractUser):
#     pass

# User._meta.get_field('email')._unique = True
# User._meta.get_field('email').blank = False
# User._meta.get_field('email').null = False

# class MyGroup(models.Model):
#     name = models.CharField(max_length=80, unique=True)
#     mygroup_user = models.ManyToManyField(User, related_name='mygroup_user')
#     # additional fields and methods here

# class MyPermission(models.Model):
#     name = models.CharField(max_length=50)
#     mypermission_user = models.ManyToManyField(User, related_name='mypermission_user')
#     # additional fields and methods here

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    account_number = models.CharField(max_length=16, unique=True)
    current_balance = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    # , related_name='accounts'
    
    def __str__(self):
        return self.account_number

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
