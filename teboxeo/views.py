from django.shortcuts import render
from .models import Producto
# Create your views here.
def index(request):
    return render(request,"index.html")

def contacto(request):
    return render(request,"contacto.html")

def login(request):
    return render(request,"login.html")

##def productos(request):
##    return render(request,"productos.html")

def productos(request):
    productos = Producto.objects.all()

def servicios(request):
    return render(request,"servicios.html")