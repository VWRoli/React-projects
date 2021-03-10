import { useFetch } from '../../useFetch';
import Error from '../Error';
import Loading from '../Loading';
import ListItem from '../ListItem';

const AssetsList = () => {
  const LIST_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`;
  const { data: coins, isError, isLoading } = useFetch(LIST_URL);
  console.log(coins);

  //Error handling
  if (isError) {
    return <Error />;
  }

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section id="asset-list">
      {coins.map((coin) => {
        return <ListItem key={coin.id} coin={coin} />;
      })}
    </section>
  );
};

export default AssetsList;
