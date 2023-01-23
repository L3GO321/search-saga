import { spawn } from "@redux-saga/core/effects";

import { watchChangeSearchSaga, watchSearchSkillsSaga } from './watcher/watcher'

export default function* saga() {
  yield spawn(watchChangeSearchSaga)
  yield spawn(watchSearchSkillsSaga)
}