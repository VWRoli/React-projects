import Assets from './Assets';
import Stats from './Stats';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>My portfolio</h1>
      <h2>Keep track of your Crypto Investments</h2>
      <div className="container">
        <Stats />
        <Assets />
      </div>
    </section>
  );
};

export default Portfolio;
