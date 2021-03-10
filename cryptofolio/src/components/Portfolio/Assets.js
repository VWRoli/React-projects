import AssetRow from './AssetRow';
import AssetsHeader from './AssetsHeader';
import { useGlobalContext } from '../../context';
import Loading from '../Loading';
import Error from '../Error';

const Assets = () => {
  const { coins, isLoading } = useGlobalContext();

  return (
    <section id="assets">
      <h2>My Assets</h2>
      <table>
        <thead>
          <AssetsHeader />
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            coins.map((coin) => {
              return <AssetRow key={coin.id} coin={coin} />;
            })
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Assets;
