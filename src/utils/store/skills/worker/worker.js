import { put, call, cancelled } from "@redux-saga/core/effects"
import { searchSkills } from "../../../api/api";
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from "../actions";

export function* handleChangeSearchSaga(action) {
  yield put(searchSkillsRequest(action.payload.searchKey))
}

export function* handleSearchSkillsSaga(action) {
  try {
    const data = yield call(searchSkills, action.payload.searchKey)
    yield put(searchSkillsSuccess(data))
  } catch (e) {
    yield put(searchSkillsFailure(e.message))
  }
} 