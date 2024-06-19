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
    ##return render(request,"productos.html")
    productos = Producto.objects.all()
    context = {"productos": productos}
    return render(request,"productos.html",context)

def servicios(request):
    return render(request,"servicios.html")


def administrador(request):
    productos = Producto.objects.all()
    context = {"productos": productos}
    return render(request,"administrador.html",context)

def agregarProducto(request):
    return render(request,"agregarProducto.html")

def clientes(request):
    return render(request,"clientes.html")