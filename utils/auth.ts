import { User } from '../type/user'

function getUser() {
  const strUser = localStorage.getItem('user')
  if (!strUser) return
  const user: User = JSON.parse(strUser)
  return user
}

export { getUser }
