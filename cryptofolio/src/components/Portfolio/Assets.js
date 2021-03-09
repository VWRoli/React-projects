import AssetRow from './AssetRow';
import AssetsHeader from './AssetsHeader';

const Assets = () => {
  return (
    <section id="assets">
      <h2>Your Assets</h2>
      <table>
        <thead>
          <AssetsHeader />
        </thead>
        <tbody>
          <AssetRow />
        </tbody>
      </table>
    </section>
  );
};

export default Assets;
