import React from 'react';
import Home from '../../views/home/index.js';
import PropTypes from 'prop-types';

const PageView = (_, context) =>{

  const {store} = context;
  const {current} = store.getState();

  switch(current){
    case 'Home':
      return <Home />
    default:
      return null;
  }

}

PageView.contextTypes = {
  store: PropTypes.object
}

export default PageView;
