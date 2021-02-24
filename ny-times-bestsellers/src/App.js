import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import List from './components/List';

//Urls
const listUrl = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);
  //Bestseller booklist
  const [books, setBooks] = useState([]);
  //Header data
  const [data, setData] = useState({});
  //List of bestseller lists
  const [list, setList] = useState([]);
  //List ID
  const [listId, setListId] = useState('hardcover-fiction');

  //Fetch booklist
  const fetchBestsellerList = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${listId}.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`
      );
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
    //todo Getting ID but not rerendering, rerenders after saving it with new id
    window.addEventListener('click', function (e) {
      const id = e.target.id;
      console.log(id);
      setListId(id);
    });

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
