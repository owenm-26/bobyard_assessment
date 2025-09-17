from django.urls import path
from . import views

urlpatterns = [
    path("comments/", views.comments_collection, name="create_or_get_comment"),
    path("comments/<int:pk>/", views.edit_comment, name="edit_comment"),
    path("comments/<int:pk>/delete/", views.delete_comment, name="delete_comment"),
]
