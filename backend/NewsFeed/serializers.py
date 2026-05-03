from rest_framework import serializers
from .models import NewsFeed

class NewsFeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsFeed
        # Указываем, какие поля модели будут доступны через API
        fields = ['id', 'title', 'content', 'date', 'is_published', 'image', 'full_content']
        # Для чтения даты, лучше указать формат
        extra_kwargs = {
            'date': {'format': '%Y-%m-%d %H:%M:%S'},
        }
