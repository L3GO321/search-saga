import { useSelector } from "react-redux"

export const Skills = () => {
  const { items, loading, error, searchKey } = useSelector(store => store)

  const isHasKey = !!searchKey.trim()

  return (
    <div>
      {!isHasKey && 'Введите что-то для поиска'}
      {isHasKey && loading && '...Загрузка'}
      {!loading && error && isHasKey && error}
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