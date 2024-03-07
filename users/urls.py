from django.urls import path, include
from rest_framework import routers
from users import views

router = routers.DefaultRouter()
router.register('nationality', views.NationalityView, 'nationality')
router.register('user', views.UserView, 'user')
router.register('role', views.RoleView, 'role')
router.register('technician', views.TechnicianView, 'technician')
router.register('team', views.TeamView, 'team')
router.register('position', views.PositionView, 'position')
router.register('player', views.PlayerView, 'player')

urlpatterns = [
    path('api/v1/', include(router.urls))
]
