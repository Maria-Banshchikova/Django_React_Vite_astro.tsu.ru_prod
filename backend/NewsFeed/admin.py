from django.contrib import admin
from django import forms
from .models import NewsFeed

@admin.register(NewsFeed)
class NewsFeedAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_published')
    fields = ('title', 'content', 'full_content', 'date', 'is_published', 'image') 
