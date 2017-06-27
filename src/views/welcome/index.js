import React from 'react';
import './welcome.scss';
import Splash from './splash';
import {onWelcomeClick} from './actions.js';
import PropTypes from 'prop-types';
import Icon from '../../components/logo/icon';
import Logo from '../../components/logo';

class Welcome extends React.Component {

 render() {

  const {store} = this.context;
  console.log(store);
  return (
    <Splash
      onClick={ () =>
        store.dispatch(onWelcomeClick())
      }
      isVisible={store.getState().showWelcome}
    >
    <div id="logo-container">
      <div>
        <Logo />
      </div>
      <Icon />
      <span>- ENTER -</span>
    </div>
    </ Splash>
  )

  }

}

Welcome.contextTypes = {
  store: PropTypes.object
};

export default Welcome;
