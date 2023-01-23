import { debounce, takeLatest, take, cancel, fork, race, call } from "@redux-saga/core/effects";
import { actions } from "../actions";
import { handleChangeSearchSaga, handleSearchSkillsSaga } from "../worker/worker";

function filterChangeSearchAction({ type, payload }) {
  return type === actions.CHANGE_SEARCH_FIELD && payload.searchKey.trim() !== ''
}

export function* watchChangeSearchSaga() {
  yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga)
}

export function* watchSearchSkillsSaga() {
  yield takeLatest(actions.SEARCH_SKILLS_REQUEST, function* (agrs) {
    yield race({
      saga: call(handleSearchSkillsSaga, agrs),
      cancel: take(actions.RESET_STORE)
    })
  })
}