import { User } from '../type/user.ts'

function getUser() {
  const strUser = localStorage.getItem('user')
  if (!strUser) return
  const user: User = JSON.parse(strUser)
  return user
}

export { getUser }
