import { User } from './user'

type Todo = {
  id?: number
  title: FormDataEntryValue
  content: FormDataEntryValue
  user: User
}

export type { Todo }
