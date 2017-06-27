const showWelcome = (state = true, action) => {
  switch(action.type){
    case 'TOGGLE_WELCOME':
      return !state;
    default:
      return state;
  }
}

export {showWelcome};
