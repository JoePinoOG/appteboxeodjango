from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('productos/',views.productos, name = 'productos'),
    path('servicios/',views.servicios, name = 'servicios'),
    path('contacto/',views.contacto, name = 'contacto'),
    path('login/',views.login, name = 'login')
]