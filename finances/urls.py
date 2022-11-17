from django.contrib import admin
from django.urls import path

from users import views as users_views
from plans import views as plans_views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', users_views.index, name='index'),
    path('signup/', users_views.signup, name='signup'),
    path('signin/', users_views.signin, name='signin'),
    path('logout/', users_views.signout, name='logout'),

    path('plans/', plans_views.plans, name='plans')
]
