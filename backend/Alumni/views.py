from rest_framework import viewsets, mixins #, permissions
from .models import Alumni
from .serializers import AlumniSerializer

class AlumniViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin): #(viewsets.ModelViewSet):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer #  без Create, Update, Destroy