import { User } from './user.ts'

type Todo = {
  id?: number
  title: FormDataEntryValue
  content: FormDataEntryValue
  user: User
}

export type { Todo }
