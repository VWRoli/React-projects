import React from 'react';

const Regions = ({ regions, filterByRegions }) => {
  return (
    <div className="regions">
      {regions.slice(0, -1).map((region, i) => {
        return (
          <button
            type="button"
            className="btn"
            key={i}
            onClick={() => filterByRegions(region)}
          >
            {region}
          </button>
        );
      })}
    </div>
  );
};

export default Regions;
