import React, { useState, useEffect } from 'react';

const BASE_URL = `https://restcountries.eu/rest/v2/all`;

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
