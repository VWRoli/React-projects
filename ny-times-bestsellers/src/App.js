import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';

import './App.css';
import Books from './components/Books';

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  //Fetch booklist
  const getBookListData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //Set data
    setBooks(data.results.books);
    //Disable loading screen
    setIsLoading(false);
  };

  useEffect(() => {
    getBookListData();
  }, []);

  //console.log(books);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Default return
  return (
    <div className="App">
      <h1>NY Times Bestseller List</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
