import { createAction } from 'redux-actions';

export const loadStart = createAction('[Users] Load start');
export const loadComplete = createAction('[Users] Load complete');
export const loadFail = createAction('[Users] Load fail');

export const loadUsers = (dispatch) => {
  dispatch(loadStart());

  fetch('https:/jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      dispatch(loadComplete(users));
    })
    .catch((error) => {
      dispatch(loadFail(error));
    });
};
