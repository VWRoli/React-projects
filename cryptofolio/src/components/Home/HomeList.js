import HomeListItem from './HomeListItem';
import Loading from '../Loading';
import Error from '../Error';
import { useFetch } from '../../useFetch';
import { BASE_URL } from '../../constant';

const HomeList = () => {
  const { isLoading, isError, data: coins } = useFetch(BASE_URL);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }
  return (
    <>
      {coins.map((coin) => {
        return <HomeListItem key={coin.id} coin={coin} />;
      })}
    </>
  );
};

export default HomeList;
