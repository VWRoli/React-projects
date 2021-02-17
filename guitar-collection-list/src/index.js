import React from 'react';
import ReactDOM from 'react-dom';
import { guitars } from './guitars';

//CSS
import './css/index.css';

function GuitarList() {
  return <section className="container"></section>;
}

console.log(guitars);
ReactDOM.render(<GuitarList />, document.getElementById('root'));
