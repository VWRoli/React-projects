import React from 'react';
import ReactDOM from 'react-dom';
import { collection } from './collection';
import Navbar from './navbar';
import { UseStateArray } from './controller';

//CSS
import './css/index.css';

function GuitarList() {
  return (
    <>
      <h1>My Guitar Collection</h1>
      <Navbar />
      <section className="container">
        <UseStateArray />
      </section>
    </>
  );
}

ReactDOM.render(<GuitarList />, document.getElementById('root'));
