// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST';
export const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';
export const CREATE_DATA_FAILURE = 'CREATE_DATA_FAILURE';
export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';
export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
export const UPDATE_DATA_FAILURE = 'UPDATE_DATA_FAILURE';

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const createDataRequest = (data) => ({ type: CREATE_DATA_REQUEST, payload: data });
export const deleteDataRequest = (id) => ({ type: DELETE_DATA_REQUEST, payload: id });
export const updateDataRequest = (id, data) => ({ type: UPDATE_DATA_REQUEST, payload: { id, data } });
