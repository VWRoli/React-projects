import React, { useState } from 'react';
import Country from './Country';
import Search from './Search';

const filterCountries = (countries, query) => {
  if (!query) return countries;

  return countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    return countryName.includes(query);
  });
};

const Countries = ({ countries }) => {
  //const { search } = window.location;
  //const query = new URLSearchParams(search).get('search');

  const [searchQuery, setSearchQuery] = useState('');
  const filteredCountries = filterCountries(countries, searchQuery);

  return (
    <main>
      <h1>Countries</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery
        ? filteredCountries.map((country, i) => {
            return <Country key={i} country={country} />;
          })
        : countries.map((country, i) => {
            return <Country key={i} country={country} />;
          })}
    </main>
  );
};

export default Countries;
