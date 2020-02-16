import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './middleware/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middleWares = [sagaMiddleware];
  const devMiddleWares = [...middleWares];
  const isDevEnv = process.env.NODE_ENV !== 'production';

  const appliedMiddleWares = isDevEnv ? devMiddleWares : middleWares;
  const store = createStore(rootReducer, applyMiddleware(...appliedMiddleWares));
  return store;
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
