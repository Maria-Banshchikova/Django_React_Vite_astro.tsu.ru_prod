from django.db import models

class teachers(models.Model):
    name = models.CharField(max_length=100)   # ФИО
    position = models.CharField(max_length=100)             # должность
    persona = models.URLField(blank=True, null=True)              # ссылка на персону.тсу
    image = models.ImageField(upload_to='teachers_images/', blank=True, null=True)  # фото препода
    is_published = models.BooleanField(default=True) # опубликовано ли
    order = models.PositiveIntegerField(default=0, blank=False, null=False, db_index=True)
    
    class Meta:
        ordering = ['order']  # Сортировка по полю order
        verbose_name_plural = "Преподаватели"

    def __str__(self):
        return self.name
