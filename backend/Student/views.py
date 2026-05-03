from rest_framework import viewsets, mixins #, permissions
from .models import Student
from .serializers import StudentSerializer

class StudentViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin): #(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer #  без Create, Update, Destroy