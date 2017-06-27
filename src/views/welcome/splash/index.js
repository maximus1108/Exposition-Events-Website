import React from 'react';
const Splash = ({
  onClick,
  children,
  isVisible
}) => {

  return (
    <aside
      onClick={onClick}
      id="welcome"
      className={isVisible ? '' : 'invisible'}
    >
      {children}
    </aside>
  );
}

export default Splash;
