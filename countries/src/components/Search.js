import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="search-bar">
      <form action="/" method="get">
        <label htmlFor="search">Search For Your Country: </label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <button id="search-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default Search;
