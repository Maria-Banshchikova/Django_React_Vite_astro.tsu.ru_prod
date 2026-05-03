from django.db import models

class Student(models.Model):
    group = models.CharField(max_length=200)   # заголовок новости
    spisok = models.TextField()               # полный текст
    image = models.ImageField(upload_to='students_images/', blank=True, null=True)  # картинка (опционально)
    is_published = models.BooleanField(default=True) # опубликовано ли

    def __str__(self):
        return self.group
