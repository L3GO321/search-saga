import { useSelector } from "react-redux"

export const Skills = () => {
  const { items, loading, error, searchKey } = useSelector(store => store)

  const isHasKey = !!searchKey.trim()

  console.log(loading)

  return (
    <div>
      {!isHasKey && 'Введите что-то для поиска'}
      {isHasKey && loading && '...Загрузка'}
      {!loading && error && isHasKey && 'Что-то пошло не так, пропробуйте еще раз :('}
      {!loading && !error && isHasKey &&
        (items.length ?
          items.map(item => (
            <div key={item.id}>{item.name}</div>
          ))
          : 'Ничего не найдено')
      }
    </div>
  )
}