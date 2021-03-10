import HomeListItem from '../ListItem';
import Loading from '../Loading';
import Error from '../Error';
import { useGlobalContext } from '../../context';

const HomeList = () => {
  const { coins, isError, isLoading } = useGlobalContext();
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
