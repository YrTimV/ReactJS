import { handleActions } from 'redux-actions';
import { loadStart, loadComplete, loadFail } from 'actions/comments';

const initialState = {
  comments: [],
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
      comments: action.payload,
      loading: false,
    };
  },
  [loadFail]: (state, action) => {
    return {
      ...state,
      comments: [],
      loading: false,
      loadError: action.payload,
    };
  },
}, initialState);
