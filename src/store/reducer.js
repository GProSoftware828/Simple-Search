import _ from 'lodash';
import * as actionTypes from './actions';

//call fetchTodos for todos:
//move it back into app.js:
export const initialState = {
	users: [],
	posts: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
		case actionTypes.GET_SEARCH:
	  	return {
	    	...state,
        users: action.users.filter(function(foundNames) {
          return foundNames.name.toLowerCase().includes(action.input.toLowerCase());
        })
	  	};
		case actionTypes.GET_USERS:
		  return {
		    ...state,
		    users: _.concat(state.users, action.users)
		  };
		case actionTypes.GET_POSTS:
		  return {
		    ...state,
		    posts: action.posts,
				username: action.username
		  };
    default:
      return state;
  }
};

export default reducer;
