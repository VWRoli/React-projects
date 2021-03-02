const Header = ({ data }) => {
  const { copyright } = data;

  return (
    <header>
      <h1>NY Times Best Sellers</h1>
      <span>{copyright}</span>
    </header>
  );
};

export default Header;
