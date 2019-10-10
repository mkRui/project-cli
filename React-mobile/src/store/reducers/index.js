import { combineReducers } from 'redux';


const Common = (state = {}, action) => {
  switch (action.type) {
    case 'setLoginToken':
      window.localStorage.setItem('LoginMsg', action.text);
      return { ...state };
    case 'setUser':
      return { ...state, user: action.text };
    default:
      return state;
  }
};

let reducer = combineReducers({
  Common: Common
});

export default reducer;
