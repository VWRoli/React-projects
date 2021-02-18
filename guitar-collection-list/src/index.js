import React from 'react';
import ReactDOM from 'react-dom';
import { guitars } from './guitars';
import Navbar from './navbar';

//CSS
import './css/index.css';

Navbar();

const UseStateArray = () => {
  const [guitar, setGuitar] = React.useState(guitars);
  return (
    <>
      {guitar.map((guitar) => {
        const { id, img, title } = guitar;
        return <ListItem key={id} {...guitar} />;
      })}
    </>
  );
};

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
      <h1>My Guitar Collection</h1>
      <Navbar />
      <section className="container">
        <UseStateArray />
      </section>
    </>
  );
}

ReactDOM.render(<GuitarList />, document.getElementById('root'));
