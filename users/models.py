from django.db import models

# Create your models here.


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


class User(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    lastname = models.CharField(max_length=50, null=False, blank=False)
    birth_date = models.DateField(
        ("Birth Date"), auto_now=False, auto_now_add=False)
    nationality_id = models.ForeignKey(
        "Nationality", verbose_name=("Nationality"), on_delete=models.CASCADE)

    class Meta:
        db_table = 'User'
        managed = True
        verbose_name = "User"
        verbose_name_plural = "Users"

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
    user_id = models.ForeignKey(
        "User", verbose_name=("User"), on_delete=models.CASCADE)
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
                fields=['user_id', 'role_id'], name='unique_technician')
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
    user_id = models.ForeignKey(
        "User", verbose_name=("User"), on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id.name

    class Meta:
        db_table = 'Player'
        verbose_name = 'Player'
        verbose_name_plural = 'Players'
