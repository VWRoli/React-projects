import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Country = ({ country }) => {
  const [showContent, setShowContent] = useState(false);
  //console.log(country);
  const { name } = country;
  return (
    <article>
      <header onClick={() => setShowContent(!showContent)}>
        <h2>{name}</h2>
        <button type="button" className="btn-toggle">
          {showContent ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
    </article>
  );
};

export default Country;
