// import { take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './actions';
import { GET_CATS_FETCH } from './constants';

// // Individual exports for testing
// export default function* samplePageSaga() {
//   // See example in containers/HomePage/saga.js
// }

function* catSaga() {
  yield takeEvery(GET_CATS_FETCH, workGetCatsFetch);
}

function* workGetCatsFetch() {
  const requestURL = 'https://api.thecatapi.com/v1/breeds';
  const cats = yield call(request, requestURL);
  yield put(getCatsSuccess(cats.slice(0, 10)));
}

export default catSaga;
