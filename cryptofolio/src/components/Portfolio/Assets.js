import AssetsHeader from './AssetsHeader';
import { useGlobalContext } from '../../context';
import AssetsTable from './AssetsTable';

const Assets = () => {
  const { assets, isLoading, clearAssets } = useGlobalContext();

  return (
    <section id="assets">
      <h2>My Assets</h2>
      <table>
        <thead>
          <AssetsHeader />
        </thead>
        {assets.length === 0 ? (
          <tbody>
            <tr>
              <td className="empty-table" colSpan="6">
                You don't have any assets in your portfolio.
              </td>
            </tr>
          </tbody>
        ) : (
          <AssetsTable />
        )}
      </table>
      {assets.length === 0 ? (
        ''
      ) : (
        <button type="button" className="clear-btn" onClick={clearAssets}>
          Clear Assets
        </button>
      )}
    </section>
  );
};

export default Assets;
