import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as TrendingSongsTypes } from 'store/ducks/trending-songs';
import { Types as RecommendedAlbumsTypes } from 'store/ducks/recommended-albums';
import { Types as PlayerTypes } from 'store/ducks/player';
import { Types as SearchTypes } from 'store/ducks/search';

/* Sagas */
import { getTrendingSongs } from './trending-songs';
import { getRecommendedAlbums } from './recommended-albums';
import { setSong, play, pause } from './player';
import { getSearchedSongs } from './search';

export default function* root() {
  yield [
    takeLatest(TrendingSongsTypes.TRENDING_REQUEST, getTrendingSongs),
    takeLatest(RecommendedAlbumsTypes.RECOMMENDED_REQUEST, getRecommendedAlbums),

    takeLatest(PlayerTypes.PLAYER_SET_SONG_REQUEST, setSong),
    takeLatest(PlayerTypes.PLAYER_PLAY, play),
    takeLatest(PlayerTypes.PLAYER_PAUSE, pause),

    takeLatest(SearchTypes.SEARCH_REQUEST, getSearchedSongs),
  ];
}
