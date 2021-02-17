import React from 'react';
import ReactDOM from 'react-dom';
import { guitars } from './guitars';

//CSS
import './css/index.css';

const ListItem = () => {
  return (
    <article className="list-item">
      <div className="img-container">
        <img
          src="https://muzikercdn.com/uploads/product_gallery/1841/184130/main_2e41710a.jpg"
          alt=""
        />
      </div>
      <div className="list-content">
        <h2 className="title">Fender Player Series Stratocaster HSS</h2>
        <div className="acquired-container">
          <input type="checkbox" id="acquired" name="acquired" value=""></input>
          <label htmlFor="acquired">Acquired</label>
        </div>
        <button type="button" className="btn btn-remove">
          Remove
        </button>
      </div>
    </article>
  );
};

function GuitarList() {
  return (
    <>
      <h1>Guitar Wishlist</h1>
      <section className="container">
        <ListItem />
      </section>
    </>
  );
}

ReactDOM.render(<GuitarList />, document.getElementById('root'));
