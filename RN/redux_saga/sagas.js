// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
} from './action';

const API_URL = 'https://661389d053b0d5d80f6799e5.mockapi.io/test';

// Fetch data
function* fetchData() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
}

// Create data
function* createData(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: CREATE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CREATE_DATA_FAILURE, payload: error.message });
  }
}

// Delete data
function* deleteData(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: DELETE_DATA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_DATA_FAILURE, payload: error.message });
  }
}

// Update data
function* updateData(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload.data);
    yield put({ type: UPDATE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_DATA_FAILURE, payload: error.message });
  }
}

// Root saga
function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
  yield takeLatest(CREATE_DATA_REQUEST, createData);
  yield takeLatest(DELETE_DATA_REQUEST, deleteData);
  yield takeLatest(UPDATE_DATA_REQUEST, updateData);
}

export default rootSaga;
