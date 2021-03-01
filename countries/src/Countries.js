import React, { useState } from 'react';
import Country from './Country';
import Pagination from './Pagination';
import Regions from './Regions';
import Search from './Search';

const Countries = ({ countries }) => {
  //
  const [countryItems, setCountryItems] = useState(countries);
  //Pagintaion
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = countries.length;
  const numPages = Math.ceil(totalItems / itemsPerPage);

  const countriesPerPage = (page, countries) => {
    const startPageItem = (page - 1) * 10;
    const endPageItem = page * 10;

    const paginatedCountries = countries.slice(startPageItem, endPageItem);
    return paginatedCountries;
  };

  //Search
  const [searchQuery, setSearchQuery] = useState('');

  //Filter countries by search query
  const filterCountries = (countries, query) => {
    if (!query) return countries;

    return countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.includes(query);
    });
  };
  const filteredCountries = filterCountries(countryItems, searchQuery);

  //Filter countries by region
  //Create region dynamic buttons array

  const allRegion = [
    'All regions',
    ...new Set(countryItems.map((country) => country.region)),
  ];
  const [regions, setRegions] = useState(allRegion);

  const filterByRegions = (region) => {
    if (region === 'All regions') {
      setCountryItems(countries);
      return;
    }
    const filteredRegions = countries.filter((country) => {
      return country.region === region;
    });
    setCountryItems(filteredRegions);
  };
  return (
    <main>
      <h1>Countries</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Regions regions={regions} filterByRegions={filterByRegions} />
      {searchQuery
        ? filteredCountries.map((country, i) => {
            return <Country key={i} country={country} />;
          })
        : countriesPerPage(curPage, countryItems).map((country, i) => {
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
