from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    spisok = serializers.SerializerMethodField()

    class Meta:
        model = Student
        # Указываем, какие поля модели будут доступны через API
        fields = ['id', 'group', 'spisok', 'is_published', 'image']

    def get_spisok(self, obj):
        if obj.spisok:
            return obj.spisok.split('\n')
        return []