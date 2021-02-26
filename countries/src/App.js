import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './Countries';
import Loading from './Loading';
import Error from './Error';
//import useFetchCountries from './useFetchCountries';

const BASE_URL = `https://restcountries.eu/rest/v2/all`;

function App() {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data);
      //Disable loading screen
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
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
