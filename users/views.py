from rest_framework import viewsets
# from .serializer import NationalitySerializer, UserSerializer, RoleSerializer, TechnicianSerializer, TeamSerializer, PositionSerializer, PlayerSerializer
# from .models import Nationality, User, Role, Technician, Team, Position, Player
from users import serializer

# inherit from models provided by rest-framework that automatically create the CRUD of a model.


class CustomUserView(viewsets.ModelViewSet):
    serializer_class = serializer.CustomUserSerializer
    queryset = serializer.CustomUser.objects.all()


class NationalityView(viewsets.ModelViewSet):
    serializer_class = serializer.NationalitySerializer
    queryset = serializer.Nationality.objects.all()


class InfoView(viewsets.ModelViewSet):
    serializer_class = serializer.InfoSerializer
    queryset = serializer.Info.objects.all()


class RoleView(viewsets.ModelViewSet):
    serializer_class = serializer.RoleSerializer
    queryset = serializer.Role.objects.all()


class TechnicianView(viewsets.ModelViewSet):
    serializer_class = serializer.TechnicianSerializer
    queryset = serializer.Technician.objects.all()


class TeamView(viewsets.ModelViewSet):
    serializer_class = serializer.TeamSerializer
    queryset = serializer.Team.objects.all()


class PositionView(viewsets.ModelViewSet):
    serializer_class = serializer.PositionSerializer
    queryset = serializer.Position.objects.all()


class PlayerView(viewsets.ModelViewSet):
    serializer_class = serializer.PlayerSerializer
    queryset = serializer.Player.objects.all()
