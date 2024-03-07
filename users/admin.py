from django.contrib import admin
from .models import CustomUser, Nationality, Info, Role, Technician, Team, Position, Player


# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Nationality)
admin.site.register(Info)
admin.site.register(Role)
admin.site.register(Technician)
admin.site.register(Team)
admin.site.register(Position)
admin.site.register(Player)
