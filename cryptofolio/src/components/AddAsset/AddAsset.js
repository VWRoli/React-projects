import Modal from '../Modal';
import AssetsList from './AssetsList';
import SearchBar from './SearchBar';

const AddAsset = () => {
  return (
    <section id="add-new-asset">
      <h1>Add New Asset</h1>
      <p>Please Select or Search your Coin</p>
      <Modal />
      <SearchBar />
      <AssetsList />
    </section>
  );
};

export default AddAsset;
