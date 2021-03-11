import { useGlobalContext } from '../../context';
import Loading from '../Loading';
import AssetRow from './AssetRow';

const AssetsTable = () => {
  const { assets, isLoading } = useGlobalContext();
  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan="6">
            <Loading />
          </td>
        </tr>
      ) : (
        assets.map((coin) => {
          return <AssetRow key={coin.id} coin={coin} />;
        })
      )}
    </tbody>
  );
};

export default AssetsTable;
