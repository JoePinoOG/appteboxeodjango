from django.shortcuts import render,redirect,get_object_or_404
from .models import Producto
from django.core.exceptions import ValidationError
# Create your views here.

def index(request):
    productos = Producto.objects.all()
    productosBoxeo = [] 
    for x in productos:
        urlImagen = str(x.imagen)
        newUrl = '..'+urlImagen[7:]
        product = {
            'nombre':x.nombre,
            'precio':x.precio,
            'descripcion':x.descripcion,
            'stock':x.stock,
            'imagen':newUrl
        }
        productosBoxeo.append(product)
    primerosProductos = productosBoxeo[:6]
    context = {"productos": primerosProductos}
    return render(request,"index.html",context)

def contacto(request):
    return render(request,"contacto.html")

def login(request):
    return render(request,"login.html")

##def productos(request):
##    return render(request,"productos.html")



def productos(request):
    ##return render(request,"productos.html")
    productos = Producto.objects.all()
    productosBoxeo = [] 
    for x in productos:
        urlImagen = str(x.imagen)
        newUrl = '..'+urlImagen[7:]
        product = {
            'nombre':x.nombre,
            'precio':x.precio,
            'descripcion':x.descripcion,
            'stock':x.stock,
            'imagen':newUrl
        }
        productosBoxeo.append(product)
    context = {"productos": productosBoxeo}
    return render(request,"productos.html",context)

def servicios(request):
    return render(request,"servicios.html")


def administrador(request):
    productos = Producto.objects.all()
    productosBoxeo = [] 
    for x in productos:
        urlImagen = str(x.imagen)
        newUrl = '..'+urlImagen[7:]
        product = {
            'nombre':x.nombre,
            'precio':x.precio,
            'descripcion':x.descripcion,
            'stock':x.stock,
            'imagen':newUrl
        }
        productosBoxeo.append(product)
    context = {"productos": productosBoxeo}
    return render(request,"administrador.html",context)

def agregarProducto(request):
    if request.method != "POST":
        return render(request,"agregarProducto.html")
    else:
        nombre= request.POST['nombre']
        descripcion=request.POST['descripcion']
        precio=request.POST['precio']
        stock=request.POST['stock']
        imagen=request.FILES['imagen']
        if nombre and descripcion and precio and stock and imagen:
            producto = Producto(
            nombre=nombre,
            descripcion=descripcion,
            precio=precio,
            stock=stock,
            imagen=imagen
            )
            producto.save()
            mensaje = "Producto Agregado"
            context={'mensaje':mensaje}
            return render(request,'agregarProducto.html',context)
        else:    
            mensaje='Error al agregar un nuevo Producto'
            context= {'mensaje':mensaje}
            return render(request,'agregarProducto.html',context)

def eliminarProducto(request,pk):
    context={}
    try:
        producto = Producto.objects.get(nombre=pk)
        producto.delete()
        mensaje="Producto Eliminado"
        productos = Producto.objects.all()
        context= {'productos':productos,'mensaje':mensaje}
        return render(request,'administrador.html',context)
    except:
        mensaje='Producto no encontrado'
        productos = Producto.objects.all()
        context= {'productos':productos,'mensaje':mensaje}
        return render(request,'administrador.html',context)

def clientes(request):
    return render(request,"clientes.html")



def modificarProducto(request, nombre_producto):
    try:
        producto = Producto.objects.get(nombre=nombre_producto)
        if request.method == 'POST':
            nombre = request.POST.get('nombre', producto.nombre)
            descripcion = request.POST.get('descripcion', producto.descripcion)
            precio = request.POST.get('precio', producto.precio)
            stock = request.POST.get('stock', producto.stock)
            imagen = request.FILES.get('imagen', None) 

            producto.nombre = nombre
            producto.descripcion = descripcion
            producto.precio = precio
            producto.stock = stock
            if imagen: 
                producto.imagen = imagen
            producto.save()

            mensaje = "Producto Modificado Exitosamente"
            context = {'mensaje': mensaje, 'producto': producto}
            return render(request, 'modificarProducto.html', context)
        else:
            context = {'producto': producto}
            return render(request, 'modificarProducto.html', context)
    except Producto.DoesNotExist:
        mensaje = "Producto no encontrado"
        context = {'mensaje': mensaje}
        return render(request, 'modificarProducto.html', context)
    except Exception as e:
        mensaje = f"Error al modificar el producto: {str(e)}"
        context = {'mensaje': mensaje}
        return render(request, 'modificarProducto.html', context)