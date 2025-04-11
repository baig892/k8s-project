const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Clean Code", author: "Robert Martin" }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
