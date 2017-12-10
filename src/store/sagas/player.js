import { cps, put } from 'redux-saga/effects';
import { NativeModules } from 'react-native';

import ActionCreators from 'store/ducks/player';

const { RNSound } = NativeModules;

export function* setSong(action) {
  try {
    yield cps(RNSound.prepare, action.song.url, 0, {});

    yield put(ActionCreators.playerSetSongSuccess(action.song, action.list));
    yield put(ActionCreators.playerPlay());
  } catch (e) {
    yield put(ActionCreators.playerSetSongFailure());
  }
}

export function* play() {
  yield cps(RNSound.play, 0);
}

export function* pause() {
  yield cps(RNSound.pause, 0);
}
