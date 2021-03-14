import { useGlobalContext } from '../../context';
import Loading from '../Loading';
import AssetRow from './AssetRow';

const AssetsTable = () => {
  const { isLoading, coinInfo, assets } = useGlobalContext();

  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan="6">
            <Loading />
          </td>
        </tr>
      ) : (
        coinInfo.map((coin, i) => {
          return <AssetRow key={coin.id} coin={coin} assets={assets[i]} />;
        })
      )}
    </tbody>
  );
};

export default AssetsTable;
