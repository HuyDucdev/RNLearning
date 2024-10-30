// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducer'; // Đảm bảo import đúng đường dẫn
import rootSaga from './sagas'; // Đảm bảo import đúng đường dẫn

const sagaMiddleware = createSagaMiddleware();
const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
