from django.shortcuts import render
# Create your views here.
def index(request):
    return render(request,"index.html")

def contacto(request):
    return render(request,"contacto.html")

def login(request):
    return render(request,"login.html")

def productos(request):
    return render(request,"productos.html")

def servicios(request):
    return render(request,"servicios.html")