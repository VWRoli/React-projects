import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  FaUniversity,
  FaGlobeAmericas,
  FaLanguage,
  FaMoneyBillAlt,
  FaUsers,
} from 'react-icons/fa';
import Map from './Map';

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
    latlng,
  } = country;

  const WORLD_POP = 7848498912;

  function popPercentage(pop) {
    const percentage = (pop / WORLD_POP) * 100;
    return percentage.toFixed(1);
  }

  const numberFormatter = (number) => {
    const formattedNmber = new Intl.NumberFormat('locale', {
      notation: 'compact',
      compactDisplay: 'long',
    }).format(number);
    return formattedNmber;
  };

  return (
    <section className="country-content">
      <div className="left-content">
        <div className="img-container">
          <img src={flag} alt={`${name} Flag`} />
        </div>
        <div className="population-bar">
          <div className="pop-content">
            <h4 className="title population-title">
              <FaUsers className="title-icon" /> Population:
            </h4>
            <p className="country-data">{numberFormatter(population)}</p>
          </div>

          <div className="bar-container">
            <div className="bar-wrapper">
              <CircularProgressbar
                value={popPercentage(population)}
                text={`${popPercentage(population)}%`}
                styles={buildStyles({
                  textColor: '#1489f3',
                  pathColor: '#1489f3',
                  trailColor: '#fa5715',
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="group capital-group">
          <h4 className="title capital-title">
            <FaUniversity className="title-icon" /> Capital:
          </h4>
          <p className="country-data">{capital}</p>
        </div>
        <div className="group region-group">
          <h4 className="title region-title">
            <FaGlobeAmericas className="title-icon" /> Region:
          </h4>
          <p className="country-data">
            {region}, {subregion}
          </p>
        </div>

        <div className="group languages-group">
          <h4 className="title languages-title">
            <FaLanguage className="title-icon" /> Language(s):
          </h4>
          <ul className="country-data">
            {languages.map((language, i) => {
              const { name } = language;

              return <li key={i}>{name}</li>;
            })}
          </ul>
        </div>

        <div className="group currencies-group">
          <h4 className="title currencies-title">
            <FaMoneyBillAlt className="title-icon" /> Currency:
          </h4>
          <ul className="country-data">
            {currencies.map((currency, i) => {
              const { name, symbol } = currency;
              return (
                <li key={i}>
                  {name} {symbol}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Map latlng={latlng} name={name} />
    </section>
  );
};

export default CountryContent;
