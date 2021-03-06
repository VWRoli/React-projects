import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ApodProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ApodProvider>
      <App />
    </ApodProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
