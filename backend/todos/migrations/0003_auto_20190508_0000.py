# Generated by Django 2.2.1 on 2019-05-07 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_auto_20190507_0416'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='expire',
            field=models.CharField(max_length=120),
        ),
    ]