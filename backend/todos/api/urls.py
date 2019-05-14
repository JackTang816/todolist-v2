from django.urls import path


from .views import (
TodoListView, 
TodoDeleteView, 
TodoCreateView, 
TodoUpdateView, 
TodoDetailView)


urlpatterns = [
    path('', TodoListView.as_view()),
    path('create/', TodoCreateView.as_view()),
    path('<pk>/', TodoDetailView.as_view()),
    path('<pk>/update/', TodoUpdateView.as_view()),
    path('<pk>/delete/', TodoDeleteView.as_view()),
]
