import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

import './App.css';
import Books from './components/Books';
import Header from './components/Header';

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [books, setBooks] = useState([]);
  const [data, setData] = useState({});

  //Fetch booklist
  const getBookListData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      //Set data
      setBooks(data.results.books);
      setData(data);
      //Disable loading screen
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getBookListData();
  }, []);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }

  //Default return
  return (
    <div className="App">
      <Header data={data} />
      <Books books={books} />
    </div>
  );
}

export default App;
