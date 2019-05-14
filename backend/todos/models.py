from django.db import models

from datetime import datetime
from django.conf import settings
from django.utils import timezone

# Create your models here.
class Todo(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1, blank=True)
    title = models.CharField(max_length=120)
    expire = models.DateField(default=timezone.now)
    priority = models.IntegerField(default=0)
    done = models.CharField(max_length=10, default='False')

    def __str__(self):
        return self.title
