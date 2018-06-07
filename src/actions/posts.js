import { createAction } from 'redux-actions';

export const loadStart = createAction('[Posts] Load start');
export const loadComplete = createAction('[Posts] Load complete');
export const loadFail = createAction('[Posts] Load fail');

export const loadPosts = (dispatch) => {
  dispatch(loadStart());

  fetch('https:/jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
      dispatch(loadComplete(posts));
    })
    .catch((error) => {
      dispatch(loadFail(error));
    });
};
