import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/trending-songs';

export function* getTrendingSongs() {
  const response = yield call(api.get, '/songs');

  if (response.ok) {
    yield put(ActionCreators.trendingSuccess(response.data));
  } else {
    yield put(ActionCreators.trendingFailure());
  }
}
