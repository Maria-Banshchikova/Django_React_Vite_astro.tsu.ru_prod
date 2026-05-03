from rest_framework import serializers
from .models import teachers

class teachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = teachers
        # Указываем, какие поля модели будут доступны через API
        fields = ['id', 'name', 'position', 'persona', 'is_published', 'image']
