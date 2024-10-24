
## Многопоточная загрузка контента

**Инструкция по запуску:**

1. Клонирование репозитория:
  
bash
  git clone https://github.com/VladimirKorolev1986/ServerClient
  ```
2. Установка зависимостей:
  
  cd multithreaded-content-downloader
  npm install
  
3. Запуск сервера:
  
  npm start
  
4. Запуск клиента:
  Откройте файл index.html в браузере.

Результат:

Доступен по адресу: http://localhost:3000 (после запуска сервера).

Описание проекта:

• Сервер:
  - Хранит соответствие ключевых слов с URL-адресами в памяти.
  - Реализует обработку запросов от клиента:
    - Возвращает список URL по ключевому слову.
    - Обрабатывает запросы на загрузку контента.
    - Отслеживает прогресс загрузки и передает статус клиенту.
  - Ограничивает количество потоков и скорость на поток по конфигурации.
• Клиент:
  - Имеет поле для ввода ключевого слова.
  - Позволяет пользователю выбрать URL из списка.
  - Отображает статус загрузки (размер, количество потоков, прогресс).
  - Отображает список загруженных контентов.
  - Позволяет просматривать выбранный загруженный контент.

