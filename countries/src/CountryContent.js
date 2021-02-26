import React from 'react';

const CountryContent = ({ country }) => {
  const {
    name,
    flag,
    languages,
    population,
    region,
    subregion,
    currencies,
    capital,
  } = country;
  return (
    <section className="country-content">
      <div className="left-content">
        <div className="img-container">
          <img src={flag} alt={`${name} Flag`} />
        </div>
        <div className="population-bar">{population}</div>
      </div>
      <div className="right-content">
        <h4>Capital:</h4>
        <p>{capital}</p>
        <h4>Region:</h4>
        <p>
          {region}, {subregion}
        </p>
        <div className="languages">
          <h4>Languages:</h4>
          {languages.map((language, i) => {
            const { name } = language;

            return <span key={i}>{name}</span>;
          })}
        </div>
        <div className="country-currencies">
          <h4>Currency:</h4>
          <ul>
            {currencies.map((currency, i) => {
              const { code, name, symbol } = currency;
              return (
                <li key={i}>
                  Code: {code}, Name: {name}, Symbol: {symbol}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CountryContent;
