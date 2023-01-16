import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { skillsReducer } from './skills/reducer';
import { changeSearchEpic, searchSkillsEpic } from './skills/epics';

const epics = combineEpics(changeSearchEpic, searchSkillsEpic)
const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: skillsReducer,
  middleware: [epicMiddleware]
});

epicMiddleware.run(epics)

export default store
