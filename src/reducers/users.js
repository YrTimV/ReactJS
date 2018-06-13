import { handleActions } from 'redux-actions';
import * as actions from 'actions/users';

const initialState = {
  users: [],
  loading: false,
};

export default handleActions({
  [actions.loadStart]: (state, action) => {
    return {
      ...state,
      loading: true,
      loadError: null,
    };
  },
  [actions.loadComplete]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  },
  [actions.loadFail]: (state, action) => {
    return {
      ...state,
      users: [],
      loading: false,
      loadError: action.payload,
    };
  },
  [actions.registerStart]: (state, action) => {
    return {
      ...state,
      loading: true,
      loadError: null,
    };
  },
  [actions.registerComplete]: (state, action) => {
    return {
      ...state,
      userId: action.payload,
      loading: false,
    };
  },
  [actions.registerFail]: (state, action) => {
    return {
      ...state,
      loading: false,
      loadError: action.payload,
    };
  },
}, initialState);
