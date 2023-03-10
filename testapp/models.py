from django.db import models
from django.contrib.auth.models import User
import json

# Create your models here.
class Users(models.Model):
    pass

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    account_number = models.CharField(max_length=16, unique=True)
    current_balance = models.DecimalField(max_digits=10, decimal_places=2)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    
    # represents the class objects as a string
    def __str__(self):
        return self.account_number

# class Account():
#     class Meta:
#         pass
#     def __init__(self,id,account_number,current_balance):
#         self.id = id
#         self.account_number = account_number
#         self.current_balance = current_balance
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    # def __str__(self):
    #     return self.account_number
    
    # def values(self):
    #     # print('self.id = ',self.id)
    #     # print('self.account_number = ',self.account_number)
    #     # print('self.current_balance = ',self.current_balance)
    #     return {"id":self.id,"account_number":self.account_number,"current_balance":self.current_balance}