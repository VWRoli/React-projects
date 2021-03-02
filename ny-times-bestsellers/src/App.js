import React, { useState } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';

import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import List from './components/List';
import { useFetchList } from './useFetchList';
import { useFetchBooks } from './useFetchBooks';

//Urls
const ALL_LISTS_URL = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

function App() {
  //Fetch all the bestseller lists
  const { isLoading, isError, data } = useFetchList(ALL_LISTS_URL);

  const [list, setList] = useState('hardcover-fiction');

  const LIST_URL = `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=Z4cVZ0lcSFliXfeaCW4LBhfS2Wj5HCsa`;

  //Fetch clicked list
  const { isListLoading, isListError, booksData } = useFetchBooks(LIST_URL);

  //Loading screen
  if (isLoading || isListLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError || isListError) {
    return <Error />;
  }
  //Default return
  return (
    <div className="App">
      <Header data={data} />
      <main>
        <List data={data} setList={setList} />
        <Books
          booksData={booksData}
          isListError={isListError}
          isListLoading={isListLoading}
        />
      </main>
    </div>
  );
}

export default App;
