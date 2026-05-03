from rest_framework import viewsets, mixins #, permissions
from .models import NewsFeed
from .serializers import NewsFeedSerializer

class NewsFeedViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin): #(viewsets.ModelViewSet):
    """
    ViewSet для модели новостей.
    Автоматически предоставляет операции: list, create, retrieve, update, destroy.
    """
    queryset = NewsFeed.objects.all().order_by('-date') # Выводим последние новости первыми
    serializer_class = NewsFeedSerializer #  без Create, Update, Destroy
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly] # изменять могут только залогиненные. Для полного запрета изменений через API (оставить только GET)