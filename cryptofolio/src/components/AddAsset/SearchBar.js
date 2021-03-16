import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useGlobalContext } from '../../context';

const SearchBar = () => {
  const { setSearchQuery } = useGlobalContext();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  return (
    <section id="search-section">
      <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="search">Search your Coin: </label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
