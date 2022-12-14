# Generated by Django 4.1.3 on 2022-11-24 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conent', models.TextField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('done', models.BooleanField(default=False)),
                ('order', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('login', models.TextField()),
                ('password', models.TextField()),
            ],
        ),
    ]
