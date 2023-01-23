const searchURL = 'http://localhost:7070/api/search'

export const searchSkills = async (searchKey) => {
  const params = new URLSearchParams({ q: searchKey });
  const response = await fetch(`${searchURL}?${params}`)

  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText)
}