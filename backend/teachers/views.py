from rest_framework import viewsets, mixins #, permissions
from .models import teachers
from .serializers import teachersSerializer

class teachersViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin): #(viewsets.ModelViewSet):
    queryset = teachers.objects.all() #.order_by('-date') # Выводим последние новости первыми
    serializer_class = teachersSerializer #  без Create, Update, Destroy