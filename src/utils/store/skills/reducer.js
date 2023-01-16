import { actions } from './actions'

const initialState = {
  items: [],
  loading: false,
  error: null,
  searchKey: ''
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_SKILLS_REQUEST:
      return { ...state, items: [], loading: true, error: null }

    case actions.SEARCH_SKILLS_SUCCESS:
      return { ...state, items: action.payload.items, loading: false, error: null }

    case actions.SEARCH_SKILLS_FAILURE:
      return { ...state, items: [], loading: false, error: action.payload.error }

    case actions.CHANGE_SEARCH_FIELD:
      return { ...state, searchKey: action.payload.searchKey }

    case actions.RESET_STORE:
      return initialState

    default:
      return state
  }
}