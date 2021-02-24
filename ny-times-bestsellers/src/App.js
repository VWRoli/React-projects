import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import List from './components/List';

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

const listUrl = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //Bestseller booklist
  const [books, setBooks] = useState([]);
  //Header data
  const [data, setData] = useState({});
  //List of bestseller lists
  const [list, setList] = useState([]);

  //Fetch booklist
  const fetchBestsellerList = async () => {
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
  const fetchListNames = async () => {
    try {
      const response = await fetch(listUrl);
      const data = await response.json();
      setList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListNames();
    fetchBestsellerList();
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
      <main>
        <List list={list} />
        <Books books={books} />
      </main>
    </div>
  );
}

export default App;
