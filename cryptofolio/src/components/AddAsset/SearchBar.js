const SearchBar = () => {
  return (
    <section id="search-section">
      <form action="/" method="get">
        <label htmlFor="search">Search your Coin: </label>
        <input type="text" name="search" id="search" />
      </form>
    </section>
  );
};

export default SearchBar;
