from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Account(models.Model):
    id = models.AutoField(primary_key=True)
    account_number = models.CharField(max_length=16, unique=True)
    current_balance = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')

    def __str__(self):
        return self.account_number
    
class UserProfile(models.Model):
    # one userprofile only link with one user
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # refered in user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    accounts = models.ManyToManyField(Account)

    def __str__(self):
        return self.user.username