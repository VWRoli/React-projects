import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
  return (
    <main>
      <h1>Countries</h1>
      {countries.map((country, i) => {
        return <Country key={i} country={country} />;
      })}
    </main>
  );
};

export default Countries;
