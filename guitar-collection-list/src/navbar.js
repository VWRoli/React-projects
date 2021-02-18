import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li data-tab="guitar">My Guitars</li>
        <li data-tab="guitar-wish">Guitar Wishlist</li>
        <li data-tab="amp">My Amps</li>
        <li data-tab="amp-wish">Amp Wishlist</li>
      </ul>
    </nav>
  );
};

export default Navbar;
