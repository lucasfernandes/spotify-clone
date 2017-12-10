import { cps, put, call, select } from 'redux-saga/effects';
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

export function* playNext() {
  const { song, list } = yield select(state => state.player);
  const nextSongIndex = list.findIndex(listSong => listSong.id === song.id) + 1;

  if ((list.length - 1) >= nextSongIndex) {
    yield put(ActionCreators.playerSetSongRequest(list[nextSongIndex], list));
  } else {
    yield put(ActionCreators.playerPause());
  }
}

export function* play() {
  try {
    yield cps(RNSound.play, 0);
  } catch (e) {
    if (e === true) {
      yield call(playNext);
    } else {
      console.tron.log(e);
    }
  }
}

export function* pause() {
  yield cps(RNSound.pause, 0);
}
