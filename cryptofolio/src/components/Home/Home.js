import HomeList from './HomeList';

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <h1>Crypto Portfolio Tracker</h1>
        <h2>
          Keep track of your profits, losses and portfolio valuation with our
          easy to use platform.
        </h2>
        <button>Create your Portfolio</button>
      </div>
      <div className="home-right">
        <HomeList />
      </div>
    </section>
  );
};

export default Home;
