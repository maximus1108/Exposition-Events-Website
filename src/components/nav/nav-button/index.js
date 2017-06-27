import React from 'react';

const NavButton = ({
  text,
  onButtonClick,
  isCurrent
}) => (
    <div
      onClick={onButtonClick}
      className={'nav-button ' + (isCurrent ? 'current' : '')}
    >
      {text}
    </div>
)

export default NavButton;
