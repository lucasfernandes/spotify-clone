import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  searchRequest: ['search'],
  searchSuccess: ['data'],
  searchFailure: null,
  searchEmpty: null,
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  songs: [],
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  data: [],
  loading: false,
  error: true,
});

export const empty = () => ({
  data: [],
  loading: false,
  error: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure,
  [Types.SEARCH_EMPTY]: empty,
});
