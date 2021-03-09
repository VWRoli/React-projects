import AssetRow from './AssetRow';
import AssetsHeader from './AssetsHeader';
import { useGlobalContext } from '../../context';

const Assets = () => {
  const { coins } = useGlobalContext();

  return (
    <section id="assets">
      <h2>Your Assets</h2>
      <table>
        <thead>
          <AssetsHeader />
        </thead>
        <tbody>
          {coins.map((coin) => {
            return <AssetRow coin={coin} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Assets;
