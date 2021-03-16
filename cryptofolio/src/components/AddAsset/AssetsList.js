import { useFetch } from '../../useFetch';
import Error from '../Error';
import Loading from '../Loading';
import ListItem from '../ListItem';
import { useGlobalContext } from '../../context';

const AssetsList = () => {
  const LIST_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`;
  const { data: coins, isError, isLoading } = useFetch(LIST_URL);
  const { assets } = useGlobalContext();

  const getOwnedCoins = () => {
    const assetId = assets.map((asset) => asset.id);
    return coins.filter((coin) => assetId.includes(coin.id));
  };
  const ownedCoins = getOwnedCoins();
  console.log(ownedCoins);

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
        const owned = ownedCoins.some((item) => item.id === coin.id);
        return <ListItem key={coin.id} coin={coin} owned={owned} />;
      })}
    </section>
  );
};

export default AssetsList;
