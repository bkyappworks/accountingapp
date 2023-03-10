from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('hello/',views.say_hello),
    path('testjson/',views.json_view),
    path('account_list/',views.get_account_list),
    path('account_details/',views.get_account_details)
]

