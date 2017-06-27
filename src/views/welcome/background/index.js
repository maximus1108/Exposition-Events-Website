import React from 'react';
import hexBackground from './heg-bg.png';

const Splash = ({
  onClick,
  children
}) => {

  return (
    <aside
      onClick={onClick}
      id="welcome"
      style={{backgroundImage: 'url(' + hexBackground ')'}}
    >
    {children}
    </aside>
  );
}

export default Splash;
