import React, { useState, useEffect } from 'react';

import './App.css';
import Books from './components/Books';

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  const [books, setBooks] = useState([]);

  //Fetch booklist
  const getBookListData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.results.books);
  };

  useEffect(() => {
    getBookListData();
  }, []);

  //console.log(books);

  return (
    <div className="App">
      <h1>NY Times Bestseller List</h1>

      <Books books={books} />
    </div>
  );
}

export default App;
