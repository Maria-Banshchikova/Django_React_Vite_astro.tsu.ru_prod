from rest_framework import serializers
from .models import Alumni

class AlumniSerializer(serializers.ModelSerializer):
    spisok = serializers.SerializerMethodField()

    class Meta:
        model = Alumni
        # Указываем, какие поля модели будут доступны через API
        fields = ['id', 'year', 'spisok', 'is_published', 'image']

    def get_spisok(self, obj):
        if obj.spisok:
            return obj.spisok.split('\n')
        return []