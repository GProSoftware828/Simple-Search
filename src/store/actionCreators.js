import * as actionTypes from './actions';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const submitSearch = (input) => async dispatch => {
	const response = await jsonPlaceholder.get('/users');
	const list = response.data.slice(0,10)
  dispatch({
    type: actionTypes.GET_SEARCH,
    users: list,
		input,
		username: ''
  });
};

export const getJSONUsers = (input) => async dispatch => {
	const response = await jsonPlaceholder.get('/users');
	const list = response.data.slice(0,10)
  dispatch({
    type: actionTypes.GET_USERS,
    users: list,
		input
  });
};

export const getUserPosts = (userID, username) => async dispatch => {
	const response = await jsonPlaceholder.get(`/posts?userId=${userID}`)
	const list = response.data.slice(0,10)
  dispatch({
    type: actionTypes.GET_POSTS,
    posts: list,
		username
  });
}