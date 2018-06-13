import { createAction } from 'redux-actions';

export const loadStart = createAction('[Users] Load start');
export const loadComplete = createAction('[Users] Load complete');
export const loadFail = createAction('[Users] Load fail');

export const registerStart = createAction('[User] Register start');
export const registerComplete = createAction('[User] Register complete');
export const registerFail = createAction('[User] Register fail');

export const loadUsers = (dispatch, userId) => {
  dispatch(loadStart());

  fetch(`http://localhost:3000/users${userId ? `/${userId}` : ''}`)
    .then((response) => response.json())
    .then((users) => {
      dispatch(loadComplete(users));
    })
    .catch((error) => {
      console.error(error);

      dispatch(loadFail(error));
    });
};

export const registerUser = (dispatch, userInfo) => {
  if (!userInfo) {
    dispatch(registerFail('No or invald user info received.'));

    return;
  }

  dispatch(registerStart());

  fetch('http://localhost:3000/users', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((userId) => {
      dispatch(registerComplete(userId));
    })
    .catch((error) => {
      console.error(error);

      dispatch(registerFail(error));
    });
};
