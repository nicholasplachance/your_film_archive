import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const MovieSearch = () => {
  return (
    <div className='movie-search'>
      <h1>Movie Search</h1>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className='suggestions'>
      <h1>Suggestions</h1>
    </div>
  );
};

const YourCollection = () => {
  return (
    <div className='your-collection'>
      <h1>Your Collection</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <h1>Your Film Archive</h1>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/movieSearch' component={MovieSearch} />
        <Route path='/suggestions' component={Suggestions} />
        <Route path='/yourCollection' component={YourCollection} />
      </Switch>
    </div>
  );
}

export default App;
