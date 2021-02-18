import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul
        onClick={(e) => {
          console.log(e.target.dataset);
        }}
      >
        <li data-tab="myGuitars">My Guitars</li>
        <li data-tab="guitarWish">Guitar Wishlist</li>
        <li data-tab="myAmps">My Amps</li>
        <li data-tab="ampWish">Amp Wishlist</li>
      </ul>
    </nav>
  );
};

export default Navbar;
