import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import ArtistPage from './artist/pages/ArtistPage'

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './css/style.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/artist" component={ArtistPage} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
