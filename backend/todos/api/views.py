from rest_framework.generics import (
ListAPIView, 
CreateAPIView,
RetrieveAPIView,
UpdateAPIView,
DestroyAPIView)

from todos.models import Todo
from .serializers import TodoSerializer

class TodoListView(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDeleteView(DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoCreateView(CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoUpdateView(UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailView(RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

