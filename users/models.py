from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    ADMIN = 1
    VIEWER = 2

    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (VIEWER, 'Viewer'),
    ]
    role = models.PositiveSmallIntegerField(
        choices=ROLE_CHOICES, default=VIEWER, blank=False, null=False)

    class Meta:
        verbose_name = "CustomUser"
        verbose_name_plural = "CustomUsers"

    def __str__(self):
        return super().__str__()

    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='customuser_set',
        related_query_name='user'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='customuser_set',
        related_query_name='user'
    )


class Nationality(models.Model):
    name = models.CharField(max_length=50, unique=True,
                            null=False, blank=False)

    class Meta:
        db_table = 'Nationality'
        managed = True
        verbose_name = "Nationality"
        verbose_name_plural = "Nationalities"

    def __str__(self):
        return self.name


class Info(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    lastname = models.CharField(max_length=50, null=False, blank=False)
    birth_date = models.DateField(
        ("Birth Date"), auto_now=False, auto_now_add=False)
    nationality_id = models.ForeignKey(
        "Nationality", verbose_name=("Nationality"), on_delete=models.CASCADE)

    class Meta:
        db_table = 'Info'
        managed = True
        verbose_name = "Info"
        verbose_name_plural = "Info"

    def __str__(self):
        return self.name


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True,
                            null=False, blank=False)

    class Meta:
        db_table = 'Role'
        managed = True
        verbose_name = "Role"
        verbose_name_plural = "Roles"

    def __str__(self):
        return self.name


class Technician(models.Model):
    info_id = models.ForeignKey(
        "Info", verbose_name=("Additional Info"), on_delete=models.CASCADE)
    role_id = models.ForeignKey("Role", verbose_name=(
        "Role"), on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id.name

    class Meta:
        db_table = 'Technician'
        managed = True
        verbose_name = 'Technician'
        verbose_name_plural = 'Technicians'
        constraints = [
            models.UniqueConstraint(
                fields=['info_id', 'role_id'], name='unique_technician')
        ]


class Team(models.Model):
    name = models.CharField(max_length=50, unique=True,
                            null=False, blank=False)
    flag = models.TextField("Flag Image", null=False, blank=False)
    shield = models.TextField("Shield Image", null=False, blank=False)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Team'
        managed = True
        verbose_name = 'Team'
        verbose_name_plural = 'Teams'


class Position(models.Model):
    name = models.CharField(max_length=50, unique=True,
                            null=False, blank=False)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Position'
        managed = True
        verbose_name = 'Position'
        verbose_name_plural = 'Positions'


class Player(models.Model):
    player_number = models.CharField(
        "Player Number", max_length=2, null=False, blank=False)
    starter = models.BooleanField()
    team_id = models.ForeignKey(
        "Team", verbose_name=("Team"), on_delete=models.CASCADE)
    position_id = models.ForeignKey(
        "Position", verbose_name=("Position"), on_delete=models.CASCADE)
    info_id = models.ForeignKey(
        "Info", verbose_name=("Additional Info"), on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id.name

    class Meta:
        db_table = 'Player'
        verbose_name = 'Player'
        verbose_name_plural = 'Players'
