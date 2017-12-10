import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  playerSetSongRequest: ['song', 'list'],
  playerSetSongSuccess: ['song', 'list'],
  playerSetSongFailure: null,
  playerPlay: null,
  playerPause: null,
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  song: null,
  list: [],
  paused: false,
  loading: false,
  error: false,
};

/* Reducers */

export const setSongRequest = state => ({
  ...state,
  loading: true,
});

export const setSongSuccess = (state, action) => ({
  song: action.song,
  list: action.list,
  paused: false,
  loading: false,
  error: false,
});

export const setSongFailure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const play = state => ({
  ...state,
  paused: false,
});

export const pause = state => ({
  ...state,
  paused: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAYER_SET_SONG_REQUEST]: setSongRequest,
  [Types.PLAYER_SET_SONG_SUCCESS]: setSongSuccess,
  [Types.PLAYER_SET_SONG_FAILURE]: setSongFailure,
  [Types.PLAYER_PLAY]: play,
  [Types.PLAYER_PAUSE]: pause,
});
