import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SuggestionPage from "./pages/suggestionpage/suggestionpage.component";

const MovieSearch = () => {
  return (
    <div className='movie-search'>
      <h1>Movie Search</h1>
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
        <Route path='/suggestions' component={SuggestionPage} />
        <Route path='/yourCollection' component={YourCollection} />
      </Switch>
    </div>
  );
}

export default App;
