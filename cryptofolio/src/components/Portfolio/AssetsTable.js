import { useGlobalContext } from '../../context';
import Loading from '../Loading';
import AssetRow from './AssetRow';

const AssetsTable = () => {
  const { isLoading, assets } = useGlobalContext();

  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan="6">
            <Loading />
          </td>
        </tr>
      ) : (
        assets.map((asset) => {
          return <AssetRow key={asset.id} asset={asset} />;
        })
      )}
    </tbody>
  );
};

export default AssetsTable;
