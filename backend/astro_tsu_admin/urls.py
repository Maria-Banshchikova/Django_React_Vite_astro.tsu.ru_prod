from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework.routers import DefaultRouter
from NewsFeed.views import NewsFeedViewSet
from teachers.views import teachersViewSet
from Student.views import StudentViewSet
from Alumni.views import AlumniViewSet
from django.conf import settings
from django.conf.urls.static import static

# Создаем роутер и регистрируем наш ViewSet
router = DefaultRouter()
router.register(r'news', NewsFeedViewSet, basename='news')  # базовый путь будет /api/news/
router.register(r'teachers', teachersViewSet, basename='teachers')  # базовый путь будет /api/teachers/
router.register(r'students', StudentViewSet, basename='students')  # базовый путь будет /api/students/
router.register(r'alumni', AlumniViewSet, basename='alumni')  # базовый путь будет /api/students/

urlpatterns = [
    path('', lambda request: redirect('/admin/')),
    path('admin/', admin.site.urls),
    path('ckeditor5/', include('django_ckeditor_5.urls')), 
    # Все URL-адреса API будут начинаться с /api/
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Это для статических и медиа-файлов в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)