#!/bin/sh

while ! python -c "import socket; s=socket.socket(); s.connect(('$DB_HOST', int('$DB_PORT'))); s.close()" 2>/dev/null; do
  sleep 1
done

python manage.py migrate --noinput
python manage.py collectstatic --noinput

python manage.py shell <<EOF
import os
from django.contrib.auth import get_user_model
User = get_user_model()
if os.getenv('ADMIN_PASSWORD') and not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', os.getenv('ADMIN_PASSWORD'))
EOF

gunicorn --bind 0.0.0.0:8000 --timeout 120 astro_tsu_admin.wsgi:application