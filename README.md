docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate
# Инструкция по запуску проекта

## Шаг 1. Подготовка файлов
1. Загрузите на сервер:
   * папку проекта с `docker-compose.prod.yml`;
   * файлы `.env.prod`, `Dockerfile` для бэкенда и фронтенда;
   * (опционально) папку `ssl/` с SSL‑сертификатами.
2. Создайте структуру папок:
   mkdir -p backend frontend ssl

docker-compose -f docker-compose.prod.yml up -d

docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate

docker-compose -f docker-compose.prod.yml exec backend python manage.py collectstatic --noinput

# Логи бэкенда
docker-compose -f docker-compose.prod.yml logs backend
# Логи фронтенда
docker-compose -f docker-compose.prod.yml logs frontend

docker-compose -f docker-compose.prod.yml build

docker-compose -f docker-compose.prod.yml up -d

