from django.db import models

class Todo(models.Model):
  content = models.TextField(blank=False)
  done = models.BooleanField(default=False)
  order = models.IntegerField(blank=False, unique=True)
  id = models.IntegerField(primary_key=True)

  def __str__(self):
    return self.content

  #userId = models.ForeingKey(User, on_delete=models.CASCADE) - when delete user will delete all todo

# class User(models.Model):
#   name = models.TextField(blank=False)
#   login = models.TextField(blank=False)
#   password = models.TextField(blank=False)
