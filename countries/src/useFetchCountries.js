import React, { useState, useEffect } from 'react';

const BASE_URL = `https://restcountries.eu/rest/v2/all`;

//todo i can get it do the App, but because it async App doesn't wait for it, just starts working even though there is no data yet
const useFetchCountries = () => {
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
  return [data];
};

export default useFetchCountries;
