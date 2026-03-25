export const saveUser = (user: unknown) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user') || 'null')
}