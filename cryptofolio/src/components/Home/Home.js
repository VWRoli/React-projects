import HomeList from './HomeList';
import Loading from '../Loading';
import Error from '../Error';
import { useFetch } from '../../useFetch';
import { BASE_URL } from '../../constant';

const Home = () => {
  const { isLoading, isError, data } = useFetch(BASE_URL);

  /*   //Loading screen
  if (isLoading) {
    return <Loading />;
  }
  //Error screen
  if (isError) {
    return <Error />;
  } */

  //Default
  return (
    <section id="home">
      <div className="home-left">
        <h1>Crypto Portfolio Tracker</h1>
        <h2>
          Keep track of your profits, losses and portfolio valuation with our
          easy to use platform.
        </h2>
        <button>Create your Portfolio</button>
      </div>
      <div className="home-right">
        <HomeList coins={data} />
      </div>
    </section>
  );
};

export default Home;
