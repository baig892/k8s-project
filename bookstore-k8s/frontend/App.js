import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/backend/api/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 Bookstore</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
