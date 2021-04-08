import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import WatchList from "./Components/WatchList";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/watchlist">
            <WatchList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
