import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import saga from './skills/saga';

import { skillsReducer } from './skills/reducer';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: skillsReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga)

export default store
