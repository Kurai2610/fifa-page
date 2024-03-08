from rest_framework import permissions


class CanViewPlayersAndTechnicians(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.groups.filter(name='viewer').exists() and request.method in permissions.SAFE_METHODS:
            return True
        return False


class CanAccessAllModels(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.groups.filter(name='admin').exists():
            return True
        return False
