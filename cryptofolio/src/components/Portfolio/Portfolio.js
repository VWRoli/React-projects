import Assets from './Assets';
import Stats from './Stats';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <header className="portfolio-header">
        <div className="header-text">
          <h1>My portfolio</h1>
          <h3>Keep track of your Crypto Investments</h3>
        </div>
        <button type="button" className="add-transaction">
          Add transaction
        </button>
      </header>
      <div className="container">
        <Stats />
        <Assets />
      </div>
    </section>
  );
};

export default Portfolio;
