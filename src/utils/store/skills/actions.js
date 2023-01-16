export const actions = {
  SEARCH_SKILLS_REQUEST: 'SEARCH_SKILLS_REQUEST',
  SEARCH_SKILLS_FAILURE: 'SEARCH_SKILLS_FAILURE',
  SEARCH_SKILLS_SUCCESS: 'SEARCH_SKILLS_SUCCESS',
  CHANGE_SEARCH_FIELD: 'CHANGE_SEARCH_FIELD',
  RESET_STORE: 'RESET_STORE'
}

export const searchSkillsRequest = searchKey => ({
  type: actions.SEARCH_SKILLS_REQUEST, payload: { searchKey }
});

export const searchSkillsFailure = error => ({
  type: actions.SEARCH_SKILLS_FAILURE, payload: { error }
});

export const searchSkillsSuccess = items => ({
  type: actions.SEARCH_SKILLS_SUCCESS, payload: { items }
});

export const changeSearchField = searchKey => ({
  type: actions.CHANGE_SEARCH_FIELD, payload: { searchKey }
});