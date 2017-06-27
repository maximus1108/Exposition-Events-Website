const current  = (state = 'Home', action) => {
  switch(action.type) {
    case 'UPDATE_CURRENT':
      return action.current;
    default:
      return state;
  }
}

export {current};
