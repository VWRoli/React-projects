import { Link } from 'react-router-dom';
import AssetsList from './AssetsList';
import SearchBar from './SearchBar';

const AddAsset = () => {
  return (
    <section id="add-asset">
      <h1>Add New Asset</h1>
      <p>Please Select or Search your Coin</p>
      <Link to="/portfolio">
        <button type="button" className="btn back-to-portfolio">
          My Portfolio
        </button>
      </Link>
      <SearchBar />
      <AssetsList />
    </section>
  );
};

export default AddAsset;
