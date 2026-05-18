#!/bin/sh

# Ждём, пока PostgreSQL будет готов
echo "Waiting for PostgreSQL..."
while ! python -c "import socket; s=socket.socket(); s.connect(('$DB_HOST', int('$DB_PORT'))); s.close()" 2>/dev/null; do
  sleep 1
done

# Применяем миграции
echo "Applying migrations..."
python manage.py migrate --noinput

# Собираем статические файлы
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Создаём суперпользователя, если его нет
echo "Creating superuser if not exists..."
python manage.py shell <<EOF
import os
from django.contrib.auth import get_user_model
User = get_user_model()
if admin_password and not User.objects.filter(username='admin').exists():
    User.objects.create_superuser(
        'admin',
        'admin@example.com',
        admin_password
    )
EOF

# Запускаем приложение
echo "Starting Gunicorn..."
exec gunicorn --bind 0.0.0.0:8000 --timeout 120 astro_tsu_admin.wsgi:application
