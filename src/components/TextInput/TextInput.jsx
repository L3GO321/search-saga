import { useDispatch, useSelector } from "react-redux"
import { actions, changeSearchField } from "../../utils/store/skills/actions"

export const TextInput = () => {
  const { searchKey } = useSelector(store => store)
  const dispatch = useDispatch()

  const searchSkills = (e) => {
    const value = e.target.value
    if (value.trim()) {
      dispatch(changeSearchField(value))
    } else {
      dispatch({ type: actions.RESET_STORE })
    }
  }

  return (
    <label>
      Поиск:
      <input type='text' value={searchKey} onChange={searchSkills} />
    </label>
  )
}