import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  trendingRequest: null,
  trendingSuccess: ['data'],
  trendingFailure: null,
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRENDING_REQUEST]: request,
  [Types.TRENDING_SUCCESS]: success,
  [Types.TRENDING_FAILURE]: failure,
});
