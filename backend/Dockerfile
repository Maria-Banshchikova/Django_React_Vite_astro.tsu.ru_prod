# Используем официальный образ Python
FROM python:3.12-slim

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл зависимостей
COPY requirements.txt .

# Устанавливаем зависимости Python.
# Устанавливаем компилятор и заголовочные файлы PostgreSQL
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    libc6-dev \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*
# --no-cache-dir чтобы уменьшить размер образа
RUN pip install --no-cache-dir -r requirements.txt

# Копируем код Django проекта в контейнер
COPY . .

# Открываем порт, который будет слушать Gunicorn (или другой WSGI-сервер)
EXPOSE 8000

# Скрипт запуска приложения
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Команда для запуска скрипта при старте контейнера
CMD ["/docker-entrypoint.sh"]

# Команда для запуска приложения с Gunicorn
# В продакшене тут будет другой host, port и количество воркеров
# Пока для локальной разработки можно оставить так, или использовать 'python manage.py runserver 0.0.0.0:8000'
#CMD ["gunicorn", "--bind", "0.0.0.0:8000", "astro_tsu_admin.wsgi:application"]
