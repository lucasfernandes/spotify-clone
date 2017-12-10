import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/search';

export function* getSearchedSongs(action) {
  const response = yield call(api.get, `/songs?q=${action.search}`);

  if (response.ok) {
    if (action.search.length > 0) {
      yield put(ActionCreators.searchSuccess(response.data));
    } else {
      yield put(ActionCreators.searchEmpty());
    }
  } else {
    yield put(ActionCreators.searchFailure());
  }
}
