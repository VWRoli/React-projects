import AssetsHeader from './AssetsHeader';
import { useGlobalContext } from '../../context';
import AssetsTable from './AssetsTable';
import { FaSyncAlt } from 'react-icons/fa';

const Assets = () => {
  const { assets, clearAssets, fetchCoinInfo } = useGlobalContext();

  return (
    <section id="assets">
      <h2 className="assets-title">
        My Assets <FaSyncAlt className="refresh-btn" onClick={fetchCoinInfo} />
      </h2>
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
