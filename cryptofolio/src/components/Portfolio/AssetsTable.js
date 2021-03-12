import { useGlobalContext } from '../../context';
import { useFetch } from '../../useFetch';
import Loading from '../Loading';
import AssetRow from './AssetRow';

const AssetsTable = () => {
  const { assets, coinInfo } = useGlobalContext();
  console.log(assets[0].id);
  const { data: coins, isLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${assets[0].id}%2C%20${assets[1].id}%2C%20${assets[2].id}`
  );

  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan="6">
            <Loading />
          </td>
        </tr>
      ) : (
        coins.map((coin) => {
          return <AssetRow key={coin.id} coin={coin} />;
        })
      )}
    </tbody>
  );
};

export default AssetsTable;
