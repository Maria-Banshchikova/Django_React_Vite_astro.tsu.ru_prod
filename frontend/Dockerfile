# Этап 1: сборка React‑приложения
# Используем образ Node.js для сборки
FROM node:22-alpine as builder

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код фронтенда
COPY . .

# Собираем проект для продакшена
RUN npm run build

# Этап 2: создание легковесного образа с nginx
# Создаем новый, облегченный образ для раздачи статики
FROM nginx:alpine

# Копируем статичные файлы из сборки
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx (для корректной раздачи SPA) 
# Проксирование API‑запросов на бэкенд
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 для Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]