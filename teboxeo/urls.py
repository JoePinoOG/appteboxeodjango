from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('productos/',views.productos, name = 'productos'),
    path('servicios/',views.servicios, name = 'servicios'),
    path('contacto/',views.contacto, name = 'contacto'),
    path('login/',views.login, name = 'login'),
    
    path('administrador/',views.administrador, name= 'administrador'),
    path('agregarProducto/',views.agregarProducto, name = 'agregarProducto'),
    path('clientes/',views.clientes, name= 'clientes'),
    path('eliminarProducto/<str:pk>',views.eliminarProducto, name='eliminarProducto')
]