import Loading from './components/Loading';
import Error from './components/Error';
import Images from './components/Images';

import { useGlobalContext } from './context';

import './App.css';

function App() {
  const { isLoading, isError } = useGlobalContext();

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }
  return (
    <main>
      <h1>Astronomy Picture of the Day</h1>
      <Images />
    </main>
  );
}

export default App;
