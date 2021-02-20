function Navbar({ func, func2, func3 }) {
  return (
    <nav>
      <h1>Guitar Collection</h1>
      <ul>
        <li onClick={func3}>My Gears</li>
        <li onClick={func}>Guitars</li>
        <li onClick={func2}>Amps</li>
      </ul>
    </nav>
  );
}

export default Navbar;
