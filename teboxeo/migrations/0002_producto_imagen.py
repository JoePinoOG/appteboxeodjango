# Generated by Django 5.0.1 on 2024-06-12 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teboxeo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagen',
            field=models.FileField(default='', upload_to='static/img'),
            preserve_default=False,
        ),
    ]