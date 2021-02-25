import './App.css';
import useFetchCountries from './useFetchCountries';

function App() {
  const [countries] = useFetchCountries();
  console.log(countries);
  return <h1>Countries</h1>;
}

export default App;
