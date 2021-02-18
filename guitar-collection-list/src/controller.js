import React, { useState } from 'react';
import { collection } from './collection';
import { ListItem } from './list';
import Navbar from './navbar';

export const UseStateArray = () => {
  const [item, setItem] = React.useState(collection);

  /* const removeItem = (id) => {
    let newCollection = item.filter((item) => item.id !== id);
    setItem(newCollection);
  }; */

  return (
    <>
      {item.map((item) => {
        const { id, img, title } = item;
        return <ListItem key={id} {...item} />;
      })}
      <button className="btn-remove" onClick={() => setItem([])}>
        clear items
      </button>
    </>
  );
};
