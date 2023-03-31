from django.urls import path
from . import views

#URLConf
urlpatterns = [
    # path('hello/',views.say_hello),
    # path('testjson/',views.json_view),
    path('accounts/',views.get_accounts),
    path('transactions/',views.get_transactions),
    path('create_account/',views.create_account),
    path('simple/',views.simple_test),
    path('login/',views.login_user)
    # path('get_balance/',views.get_balance)
]

