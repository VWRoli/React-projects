import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './Countries';
//import useFetchCountries from './useFetchCountries';

const BASE_URL = `https://restcountries.eu/rest/v2/all`;

function App() {
  const [data, setData] = useState([]);
  const fetchCountryData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  // console.log(data);

  return <Countries countries={data} />;
}

export default App;
