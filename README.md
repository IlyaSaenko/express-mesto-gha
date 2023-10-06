[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд
* [Ссылка на репозиторий](https://github.com/IlyaSaenko/express-mesto-gha)


## Оглавление

- [Обзор проекта](#обзор-проекта)
  - [Задачи проекта](#задачи-проекта)
  - [Функциональность проекта](#функциональность-проекта)
  - [Директории проекта](#директории-проекта)
  - [Запуск проекта](#запуск-проекта)
  - [Ссылки](#ссылки)
- [Ход выполнения проекта](#ход-выполнения-проекта)
  - [Используемые технологии](#используемые-технологии)
  - [Полученный опыт](#чему-я-научился-работая-над-проектом)
- [Автор](#автор)

## Обзор проекта

### Задачи проекта

Главнми задачами проекты были: усвоение основ backend-разработки и применение на практике, развернув сервер на Node.js и Express.

### Функциональность проекта

- В проекте созданы схемы и модели пользователей и карточек с контентом:
  - `card` — схема карточки с контентом
  - `user` — схема пользователя
- В проекте созданы эндпоинты:
  - `/cards` — обрабатывает:
    - GET запросы — отдаёт все карточки из БД
    - POST запросы — создаёт новую карточку с контентом
  - `/cards/:cardId` — обрабатывает DELETE запросы, удаляет карточку по `cardId`
  - `/cards/:cardId/likes` — обрабатывает:
    - PUT запросы — добавляет лайк карточке с контентом
    - DELETE запросы — удаляет лайк карточке с контентом
  - `/signin` — обрабатывает POST запросы, производит аутентификацию пользователя
  - `/signup` — обрабатывает POST запросы, производит регистрацию пользователя
  - `/users` — обрабатывает:
    - GET запросы — отдаёт всех пользователей из БД
    - POST запросы — создаёт нового пользователя
  - `/users/:userId` — обрабатывает GET запросы, отдаёт пользователя по `userId`
  - `/users/me` — обрабатывает:
    - GET запросы — отдаёт информацию о текущем пользователе
    - PATCH запросы — обновляет информацию о пользователе
  - `/users/me/avatar` — обрабатывает PATCH запросы, обновляет аватар пользователя
- Созданы мидлвары:
  - Централизованной обработки ошибок
  - Авторизации пользователя
  - Ограничитель количество запросов (защита от DDoS атак)
- Производится валидация поступающих данных:
  - до передачи информации контроллерам с помощью joi и celebrate
  - на уровне схем с помощью validator и встроенных методов mongoose

### Директории проекта

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

### Используемые технологии:

![Express](https://img.shields.io/badge/-Express-090909?style=for-the-badge&logo=Express)
![Node.js](https://img.shields.io/badge/-Node.js-090909?style=for-the-badge&logo=Node.js)
![MongoDB](https://img.shields.io/badge/-MongoDB-090909?style=for-the-badge&logo=MongoDB)
![Postman](https://img.shields.io/badge/-Postman-090909?style=for-the-badge&logo=Postman)

### Полученный опыт

- Навык разворачивать сервер на Node.js
- Использование в работе фреймворк Express
- Работа с базой данных MongoDB
- Обработка различных видов запросов
- Обработка ошибок запросов
- Валидиация приходщей в запрос информации
- Работа с JWT токеном
- Работа с cookies
- Нвык применения защиты приложения

## Автор

**Илья Саенко**