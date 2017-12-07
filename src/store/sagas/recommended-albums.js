import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/recommended-albums';

export function* getRecommendedAlbums() {
  const response = yield call(api.get, '/albums');

  if (response.ok) {
    yield put(ActionCreators.recommendedSuccess(response.data));
  } else {
    yield put(ActionCreators.recommendedFailure());
  }
}
