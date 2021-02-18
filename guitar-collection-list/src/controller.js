import React, { useState } from 'react';
import { collection } from './collection';
import { ListItem } from './list';

export const UseStateArray = () => {
  const [item, setItem] = React.useState(collection);

  //Filter out guitars
  const myGuitars = collection.filter((item) => item.guitar && !item.wish);
  const guitarWish = collection.filter((item) => item.guitar && item.wish);
  const myAmps = collection.filter((item) => item.amp && !item.wish);
  const ampWish = collection.filter((item) => item.amp && item.wish);

  //console.log(myGuitars);

  return (
    <>
      {item.map((guitar) => {
        const { id, img, title } = guitar;
        return <ListItem key={id} {...guitar} />;
      })}
      <button className="btn-remove" onClick={() => setItem([])}>
        clear items
      </button>
    </>
  );
};
