import React from 'react';

const Job = () => {
  return (
    <div>
      <h3>{title}</h3>
      <p className="tag">{date}</p>
      <ul>
        <li>
          {displayLanguage.jobDescription1}{' '}
          <a
            href="https://github.com/Greenstand/treetracker-wallet-web"
            target="_blank"
            rel="noreferrer"
          >
            Treetracker Web Wallet
          </a>{' '}
          {displayLanguage.jobDescription1part2}{' '}
          <a
            href="https://github.com/Greenstand/treetracker-web-map-client"
            target="_blank"
            rel="noreferrer"
          >
            Web Map Client
          </a>
        </li>
        <li>
          {displayLanguage.jobDescription2} <Tag type="React" />
          <Tag type="Material-UI" />.
        </li>
        <li>{displayLanguage.jobDescription3}</li>
        <li>{displayLanguage.jobDescription4}</li>
      </ul>
    </div>
  );
};

export default Job;
