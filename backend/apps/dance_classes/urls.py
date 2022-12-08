from django.urls import path

from .views import (
    DanceClassCreateListAPIView,
    LoadDevDataAPIView,
)


urlpatterns = [
    path("api", DanceClassCreateListAPIView.as_view(), name="dance-class-api"),
    path("load-dev-data", LoadDevDataAPIView.as_view(), name="load-dev-data"),
]
