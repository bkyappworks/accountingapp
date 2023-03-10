from django.urls import path
from . import views

#URLConf
urlpatterns = [
    # path('hello/',views.say_hello),
    # path('testjson/',views.json_view),
    path('accounts/',views.get_account_list),
    path('transactions/',views.get_transactions),
    path('get_balance/',views.get_balance)
]

