from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=30)
    correo = models.EmailField(unique=True,max_length=100,blank=True,null=True)
    password = models.CharField(max_length=50)   


class Producto(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.TextField()
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.FileField(upload_to='./teboxeo/static/img')

