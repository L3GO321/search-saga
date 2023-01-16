import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { map, filter, debounceTime, switchMap, catchError, takeUntil } from 'rxjs/operators';
import { actions, searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from './actions'

const searchURL = 'http://localhost:7070/api/search'

export const changeSearchEpic = action$ => action$.pipe(
  ofType(actions.CHANGE_SEARCH_FIELD),
  map(action => action.payload.searchKey.trim()),
  filter(searchKey => searchKey !== ''),
  debounceTime(300),
  map(searchKey => searchSkillsRequest(searchKey))
)

export const searchSkillsEpic = action$ => action$.pipe(
  ofType(actions.SEARCH_SKILLS_REQUEST),
  map(action => action.payload.searchKey),
  map(searchKey => new URLSearchParams({ q: searchKey })),
  switchMap(params => ajax.getJSON(`${searchURL}?${params}`).pipe(
    map(items => searchSkillsSuccess(items)),
    takeUntil(action$.pipe(
      ofType(actions.RESET_STORE)
    )),
    catchError(error => of(searchSkillsFailure(error))),
  ))
)