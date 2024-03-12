from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from . import serializer


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    user = get_object_or_404(
        serializer.User, username=request.data['username'])
    if user.check_password(request.data['password']):
        token, created = Token.objects.get_or_create(user=user)
        l_serializer = serializer.UserSerializer(user)
        return Response({'token': token.key, 'user': l_serializer.data}, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    r_serializer = serializer.UserSerializer(data=request.data)

    if r_serializer.is_valid():
        user = r_serializer.save()
        user.set_password(request.data['password'])
        user.save()

        token = Token.objects.create(user=user)

        return Response({'token': token.key, 'user': r_serializer.data}, status=status.HTTP_201_CREATED)
    return Response(r_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Las clases de vista para los modelos de tu aplicación siguen igual.


class UserView(viewsets.ModelViewSet):
    serializer_class = serializer.UserSerializer
    queryset = serializer.User.objects.all()


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
