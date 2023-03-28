# request handler
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Account,Transaction
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
# from rest_framework import serializers
from .serializers import AccountSerializer, TransactionSerializer
from django.views.decorators.csrf import csrf_exempt 
from django.contrib.auth.hashers import check_password

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

# 0 test GET over http
@csrf_exempt
def simple_test(request):
    print("request.GET['id'] = ",request.GET['id'])
    # return JsonResponse({'id': 3, 'account_number': '0987654322', 'current_balance': '10.00', 'user': 4})
    id = request.GET['id']
    accounts = Account.objects.filter(user_id=id)
    # print(type(accounts)) # <class 'django.db.models.query.QuerySet'>
    print("accounts = ", accounts)
    # Serialize the accounts queryset into JSON
    serializer = AccountSerializer(accounts).data
    # Return the serialized account list as JSON
    return JsonResponse(serializer, safe=False)

# 1 GET
def get_accounts(request = None):
    if request.method == 'POST':
        pass
    # Retrieve the User instance associated with the logged-in user
    
    login_user = request.user.id
    # login_user = User.objects.get(id='2')
    
    # Retrieve the related accounts using the accounts attribute of the UserProfile instance
    accounts = Account.objects.filter(user_id=login_user.id) # accounts = Account.objects.all(user_id=login_user.id) 
    
    # Serialize the accounts queryset into JSON
    serializer = AccountSerializer(accounts, many=True).data
    
    # Return the serialized account list as JSON
    return JsonResponse(serializer, safe=False)

# 2 GET
def get_transactions(request = None):
    if request.method == 'POST':
        pass

    transactions = Transaction.objects.filter(account_id=request.account.id) 
    # transactions = Transaction.objects.filter(account_id='1') 
    print("transactions: ",transactions)
    transaction_list = TransactionSerializer(transactions, many=True).data
    print("transaction_list: ",transaction_list)

    # Return the serialized account list as JSON
    return JsonResponse(transaction_list, safe=False)

# 3 POST
import requests
@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        
        username = request.POST.get('username') #request.GET['id']
        print("username: ",username)
        # why None?
            # Postman? Y
            # request.POST.get()? N
            
        password = request.POST.get('password')
        print("password: ",password)
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'blah': 'blah'}, status=200)
            # return get_accounts(request)
        else:
            # return user
            return JsonResponse({'error': 'Invalid username or password.'}, status=401)

# 4 GET
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

# 5 POST
def create_account(request):
    if request.method == 'POST':
        pass

# 6 POST    
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


