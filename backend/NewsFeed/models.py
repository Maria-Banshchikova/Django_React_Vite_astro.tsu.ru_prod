from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class NewsFeed(models.Model):
    title = models.CharField(max_length=200)   # заголовок новости. CharField – короткий текст.
    content = models.TextField()               # полный текст. TextField – большой текст.
    image = models.ImageField(upload_to='news_images/', blank=True, null=True)  # ImageField – поле для загрузки картинок (требует установки Pillow).
    date = models.DateTimeField() #(auto_now_add=True) - тогда автоматически ставит текущую дату при создании. Но т.к. нам нужен анонс, то удерем эту часть.
    is_published = models.BooleanField(default=True) # опубликовано ли
    #full_content = models.TextField(blank=True, null=True, verbose_name="Полное содержание")
    full_content = CKEditor5Field(blank=True, null=True, verbose_name="Полное содержание")

    def __str__(self):
        return self.title