import React from 'react';
import './nav.scss';
import NavButton from './nav-button';
import {onNavBtnClick} from './actions.js';
import PropTypes from 'prop-types'


const Nav = (_, context) => {

  const navItems = ['Home', 'Audio', 'Events'];

  const {store} = context;

  return (
      <nav id="nav">
        {
          navItems.map((item, i) => {
            return (
              <NavButton
                key={i}
                text={item}
                onButtonClick={
                  () => store.dispatch(onNavBtnClick(item))
                }
               isCurrent={item === store.getState().current}
            />
          )
          })
        }
      </nav>
  )
}

Nav.contextTypes = {
  store: PropTypes.object
}

export default Nav;
