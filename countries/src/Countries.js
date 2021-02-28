import React, { useState } from 'react';
import Country from './Country';
import Pagination from './Pagination';
import Search from './Search';

const filterCountries = (countries, query) => {
  if (!query) return countries;

  return countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    return countryName.includes(query);
  });
};

const Countries = ({ countries }) => {
  const [curPage, setCurPage] = useState(1);
  //Pagintaion
  const itemsPerPage = 10;
  const totalItems = countries.length;
  const numPages = Math.ceil(totalItems / itemsPerPage);

  const countriesPerPage = (page) => {
    const startPageItem = (page - 1) * 10;
    const endPageItem = page * 10;

    return countries.slice(startPageItem, endPageItem);
  };

  //Search
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
        : countriesPerPage(curPage).map((country, i) => {
            return <Country key={i} country={country} />;
          })}
      <Pagination
        curPage={curPage}
        setCurPage={setCurPage}
        numPages={numPages}
      />
    </main>
  );
};

export default Countries;
