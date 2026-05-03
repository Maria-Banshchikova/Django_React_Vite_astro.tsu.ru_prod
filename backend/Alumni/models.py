from django.db import models

class Alumni(models.Model):
    year = models.CharField(max_length=200)   # заголовок новости
    spisok = models.TextField()               # полный текст
    image = models.ImageField(upload_to='alumni_images/', blank=True, null=True)  # картинка (опционально)
    is_published = models.BooleanField(default=True) # опубликовано ли
    order = models.PositiveIntegerField(default=0, blank=False, null=False, db_index=True)

    class Meta:
        ordering = ['order']  # Сортировка по полю order
        verbose_name_plural = "Год выпуска"

    def __str__(self):
        return self.year
