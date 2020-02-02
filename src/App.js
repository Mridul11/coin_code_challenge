import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Header from './containers/header';
import Grid from './containers/grid';
import SpChart from './containers/chart';

import { fetchCryptos } from './actions/cryptos';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(fetchCryptos());
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <Fragment>
            <Header/>
            <div className="header-padding">
                <Switch>
                  <Route path={'/'} exact component={Grid} />
                  <Route path={'/liquidity'} exact component={SpChart} />
                  <Redirect to={'/'} />
                </Switch>
            </div>
          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = { store: PropTypes.object.isRequired };

export default App;
