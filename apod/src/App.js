import './App.css';
import { useFetch } from './useFetch';

const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
//const BASE_URL = `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`;

function App() {
  const { data, isLoading, isError } = useFetch(BASE_URL);
  console.log(data);
  return (
    <main>
      <h1>Martian Weather</h1>
    </main>
  );
}

export default App;
