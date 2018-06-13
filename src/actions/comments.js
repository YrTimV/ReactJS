import { createAction } from 'redux-actions';

export const loadStart = createAction('[Comments] Load start');
export const loadComplete = createAction('[Comments] Load complete');
export const loadFail = createAction('[Comments] Load fail');

export const loadComments = (dispatch, postId) => {
  dispatch(loadStart());
  
  fetch(`https:/jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      dispatch(loadComplete(comments));
    })
    .catch((error) => {
      dispatch(loadFail(error));
    });
};
