import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'astro_tsu_admin.settings')

application = get_wsgi_application()
