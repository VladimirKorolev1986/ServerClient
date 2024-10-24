const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Соответствие ключевых слов и URL
const keywords = {
 "Edinburgh": [
  "https://www.edinburgh.gov.uk/",
  "https://www.edinburgh.org/",
  "https://www.visit-edinburgh.com/",
 ],
 "London": [
  "https://www.london.gov.uk/",
  "https://www.visitlondon.com/",
  "https://www.london.co.uk/",
 ],
 // Добавьте больше ключевых слов
};

// Конфигурация потоков
const maxThreads = 2; // Максимальное количество потоков
const maxDownloadSpeed = 1000000; // Максимальная скорость в байтах/секунду

app.use(cors());
app.use(express.json());

// Обработка запроса на список URL
app.post('/urls', (req, res) => {
 const keyword = req.body.keyword;
 if (keywords[keyword]) {
  res.json(keywords[keyword]);
 } else {
  res.status(404).json({ message: 'Ключевое слово не найдено' });
 }
});

// Обработка запроса на загрузку контента
app.post('/download', async (req, res) => {
 const url = req.body.url;
 const response = await fetch(url);
 const content = await response.text();
 res.json({ content });
});

app.listen(port, () => {
 console.log(`Сервер запущен на порту ${port}`);
});
