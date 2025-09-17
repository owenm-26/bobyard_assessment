from django.urls import path, include

urlpatterns = [
    path("api/", include("backendapp.urls")),
]
