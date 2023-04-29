# request handler
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Account,Transaction
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
# from rest_framework import serializers
from .serializers import AccountSerializer, TransactionSerializer
from django.views.decorators.csrf import csrf_exempt 
import json
from rest_framework.response import Response
from rest_framework import status

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

# 3 POST
@csrf_exempt
def login_user(request):
    # print(request.body) # b'{"username":"testuser123","password":"password123"}'
    if request.method == 'POST':
        # username = request.POST.get('username') #request.GET['id']
        # print("username: ",username)
        # why None?
            # Postman? Y
            # request.POST.get()? N
        # why UI login return Unauthorized   
        # password = request.POST.get('password')
        # print("password: ",password)

        # change to the following to work with fetch() in UI
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        
        username = body.get('username')
        password = body.get('password')
        
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # return JsonResponse({'blah': 'blah'}, status=200)
            # print("SUCCESS login!!!")
            return get_accounts(request)
        else:
            # return user
            # print("FAILED login!!!")
            return JsonResponse({'error': 'Invalid username or password.'}, status=401)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
# 1 GET
@csrf_exempt
def get_accounts(request = None):
    if request.method == 'POST':
        pass
    # Retrieve the User instance associated with the logged-in user    
    cur_user = request.user
    user_id = cur_user.id
    
    # Retrieve the related accounts using the accounts attribute of the UserProfile instance
    accounts = Account.objects.filter(user_id=user_id) # accounts = Account.objects.all(user_id=login_user.id) 
    
    # Serialize the accounts queryset into JSON
    serializer = AccountSerializer(accounts, many=True).data
    print("accounts in SERVER:: ",serializer)
    
    # Return the serialized account list as JSON
    return JsonResponse(serializer, safe=False)

# 2 GET
@csrf_exempt
def get_transactions(request = None):
    if request.method == 'GET':
        account_number = request.GET.get('account')
        print("account_id in SERVER: ",account_number)
        transactions = Transaction.objects.filter(account_id=account_number)
        serializer = TransactionSerializer(transactions, many=True).data
        print("transactions in SERVER: ",serializer)
        return JsonResponse(serializer, safe=False)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

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
@csrf_exempt
def create_account(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print("data: ", data) 
        # data:  {'account_number': '9322698407855138', 'current_balance': '1000.00', 'user': 1}
        serializer = AccountSerializer(data=data)
        if serializer.is_valid():
            account = serializer.save()
            response_data = {'id': account.id, 'account_number': account.account_number}
            return JsonResponse(response_data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

# 6 POST
@csrf_exempt    
def create_transaction(request):
    # fields = ('id', 'date', 'transaction_type','note','amount','account')
    if request.method == 'POST':
        data = json.loads(request.body)
        print("data: ", data) 
        serializer = TransactionSerializer(data=data)
        if serializer.is_valid():
            transaction = serializer.save()
            response_data = {'id': transaction.id, 'date': transaction.date, 'transaction_type': transaction.transaction_type, 
                             'note': transaction.note, 'amount': transaction.amount}
            return JsonResponse(response_data, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    


