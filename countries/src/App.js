import React from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Loading from './components/Loading';
import Error from './components/Error';
import { useFetch } from './useFetch';

const BASE_URL = `https://restcountries.eu/rest/v2/all`;

function App() {
  const { isLoading, isError, data } = useFetch(BASE_URL);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }
  //Error screen
  if (isError) {
    return <Error />;
  }

  return <Countries countries={data} />;
}

export default App;
