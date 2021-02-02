import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas/root.saga';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="">
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
