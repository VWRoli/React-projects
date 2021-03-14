import { useGlobalContext } from '../../context';
import Loading from '../Loading';
import AssetRow from './AssetRow';

const AssetsTable = () => {
  const { isLoading, coinInfo } = useGlobalContext();

  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan="6">
            <Loading />
          </td>
        </tr>
      ) : (
        coinInfo.map((coin) => {
          return <AssetRow key={coin.id} coin={coin} />;
        })
      )}
    </tbody>
  );
};

export default AssetsTable;
