import AssetRow from './AssetRow';
import AssetsHeader from './AssetsHeader';
import { useGlobalContext } from '../../context';
import Loading from '../Loading';

const Assets = () => {
  const { assets, isLoading } = useGlobalContext();

  return (
    <section id="assets">
      <h2>My Assets</h2>
      <table>
        <thead>
          <AssetsHeader />
        </thead>
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
      </table>
    </section>
  );
};

export default Assets;
