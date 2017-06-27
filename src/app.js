import React from 'react';
import Nav from './components/nav';
import Welcome from './views/welcome';
import PageView from './components/pageview';
import PropTypes from 'prop-types';

class App extends React.Component  {

  render() {
    const {store} = this.context;

    return (
      <div>
        <Nav />
        <Welcome />
        <PageView />
      </div>
    )
  }
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
