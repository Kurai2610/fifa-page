from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from users import views

# using the "routers" model I create the necessary routes for each view in charge of a CRUD

router = routers.DefaultRouter()
router.register('user', views.UserView, 'user')
router.register('nationality', views.NationalityView, 'nationality')
router.register('info', views.InfoView, 'info')
router.register('role', views.RoleView, 'role')
router.register('technician', views.TechnicianView, 'technician')
router.register('team', views.TeamView, 'team')
router.register('position', views.PositionView, 'position')
router.register('player', views.PlayerView, 'player')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/login/', views.login),
    path('api/v1/register/', views.register),
    path('docs/', include_docs_urls(title='Soccer API')),
]
