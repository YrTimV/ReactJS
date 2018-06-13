import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/users';

const initialState = {
  users: [],
  loading: false,
};

export default handleActions({
  [loadStart]: (state, action) => {
    return {
      ...state,
      loading: true,
      loadError: null,
    };
  },
  [loadComplete]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  },
  [loadFail]: (state, action) => {
    return {
      ...state,
      users: [],
      loading: false,
      loadError: action.payload,
    };
  },
}, initialState);
