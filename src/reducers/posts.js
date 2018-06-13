import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/posts';

const initialState = {
  posts: [],
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
      posts: action.payload,
      loading: false,
    };
  },
  [loadFail]: (state, action) => {
    return {
      ...state,
      posts: [],
      loading: false,
      loadError: action.payload,
    };
  },
}, initialState);
