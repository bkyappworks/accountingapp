# request handler
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Account,Transaction
from django.contrib.auth.models import User
# from rest_framework import serializers
from .serializers import AccountSerializer, TransactionSerializer

# Create your views here.
# def cal():
#     x = 1
#     y = 2
#     return x

# def say_hello(request):
#     x = cal()
#     return HttpResponse('Hello World')

# def json_view(request):
#     data = {
#         'name': 'John',
#         'age': 30,
#         'city': 'New York'
#     }
#     return JsonResponse(data)

# add request.method == 'GET' or 'POST'
# 1
def get_account_list(request = None):
    if request.method == 'POST':
        pass
    # Retrieve the User instance associated with the logged-in user
    login_user = request.user.get(id='2') # login_user = request.user
    
    # Retrieve the related accounts using the accounts attribute of the UserProfile instance
    accounts = Account.objects.filter(user_id=login_user.id) # accounts = Account.objects.all(user_id=login_user.id) 
    
    # Serialize the accounts queryset into JSON
    serializer = AccountSerializer(accounts, many=True).data
    
    # Return the serialized account list as JSON
    return JsonResponse(serializer, safe=False)

# 2
def get_transactions(request):
    if request.method == 'GET':
        # transactions = Transaction.objects.all()
        # test data 1
        # transactions = Transaction.objects.create(
        #     # account=Account(0,'1234567891011122',100),
        #     transaction_type='DEBIT',
        #     amount=10,
        #     note='test transaction with account #1234567891011122',
        #     date='2023-03-10'
        # )
        # test data 2
        transactions = Transaction(
            id = 1,
            transaction_type='DEBIT',
            amount=10,
            note='test transaction with account #1234567891011122',
            date='2023-03-10'
        )
        data = TransactionSerializer(transactions).data
        print("create_transaction() data: ",data)
        return JsonResponse(data)

# 3
def login_user(request):
    if request.method == 'POST':
        pass
    # create UserProfile

    # call get_account_list()

# 4
def get_balance(request, account_id, date):
    # Retrieve the account object
    account = get_object_or_404(Account, id=account_id)

    # Calculate the balance of the account at the specified date
    transactions = Transaction.objects.filter(account=account, date__lte=date)
    balance = account.current_balance + sum(t.amount for t in transactions if t.transaction_type == 'CREDIT')
    balance -= sum(t.amount for t in transactions if t.transaction_type == 'DEBIT')

    # Return the balance as a JSON response
    data = {'account_id': account_id, 'date': date, 'balance': balance}
    return JsonResponse(data)

# 5
def create_account(request):
    if request.method == 'POST':
        pass

if __name__ == "__main__":
    request = None
    get_account_list(request)

# 6     
def create_transaction(request):
    pass
#     if request.method == 'POST':
#         # account_id = request.POST.get('account_id')
#         transaction_type = request.POST.get('transaction_type')
#         amount = request.POST.get('amount')
#         note = request.POST.get('note', '')
#         date = request.POST.get('date')

#         # Get the Account object
#         # account = get_object_or_404(Account, pk=account_id)

#         # Create the Transaction object
#         transaction = Transaction.objects.create(
#             # account=account,
#             transaction_type=transaction_type,
#             amount=amount,
#             note=note,
#             date=date
#         )

#         # Update the current_balance field of the Account model
#         # if transaction_type == 'CREDIT':
#         #     account.current_balance += amount
#         # elif transaction_type == 'DEBIT':
#         #     account.current_balance -= amount
#         # account.save()

#         # Return a JSON response
#         # data = {
#         #     'transaction_id': transaction.id,
#         #     # 'account_id': account.id,
#         #     'current_balance': account.current_balance
#         # }

#         data = TransactionSerializer(transaction).data
#         print("create_transaction() data: ",data)
#         return JsonResponse(data)


