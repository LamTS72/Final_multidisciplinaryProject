from django.contrib import admin
import users.models

# Register your models here.
admin.site.register(users.models.CustomUser)