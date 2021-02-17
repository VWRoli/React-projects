import React from 'react';
import ReactDOM from 'react-dom';
import { guitars } from './guitars';

//CSS
import './css/index.css';

const ListItem = (props) => {
  const { id, img, title } = props;
  return (
    <article className="list-item">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="list-content">
        <h2 className="title">{title}</h2>
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
        {guitars.map((guitar) => {
          return <ListItem key={guitar.id} {...guitar} />;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<GuitarList />, document.getElementById('root'));
