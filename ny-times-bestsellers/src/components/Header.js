const Header = ({ data }) => {
  const { list_name: list, previous_published_date: date } = data.results;
  const copyright = data.copyright;

  return (
    <header>
      <h1>NY Times Best Sellers</h1>
      <h2>{list}</h2>
      <p>{date}</p>
      <span>{copyright}</span>
    </header>
  );
};

export default Header;
