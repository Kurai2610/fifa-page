from django.contrib import admin
from .models import Nationality, User, Role, Technician, Team, Position, Player


# Register your models here.
admin.site.register(Nationality)
admin.site.register(User)
admin.site.register(Role)
admin.site.register(Technician)
admin.site.register(Team)
admin.site.register(Position)
admin.site.register(Player)
