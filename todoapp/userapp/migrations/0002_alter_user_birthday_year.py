# Generated by Django 3.2.8 on 2022-09-29 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birthday_year',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
