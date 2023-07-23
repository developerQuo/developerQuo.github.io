import { Todo } from '../type/todo.ts'
import { getValues } from '../utils/form.ts'
import { getUser } from '../utils/auth.ts'

function get() {
  const todoListStr = localStorage.getItem('todo-list')
  if (!todoListStr) return

  const user = getUser()
  if (!user) return

  const todoList: Todo[] = JSON.parse(todoListStr) ?? []
  const userTodoList = todoList.filter(
    todo => todo.user.username === user.username,
  )
  return userTodoList
}

function list() {
  const listHtml = document.querySelector<HTMLUListElement>('#todo-list ul')!
  const todoList = get()
  if (!todoList) return
  listHtml.innerHTML = todoList
    .map(todo => {
      return `
      <li>
        <h3>${todo.title}</h3>
        <p class="read-the-docs">${todo.content}</p>
        <button type="button" data-id="${todo.id}">Remove</button>
      </li>
    `
    })
    .join('')

  listHtml.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id
      if (!id) return
      remove({ id: Number(id) })
    })
  })
}

function add(values: Todo) {
  const todoList = get() ?? []

  const user = getUser()
  if (!user) return

  todoList.push({ ...values, id: todoList.length + 1, user })
  localStorage.setItem('todo-list', JSON.stringify(todoList))
}

function addEvent() {
  const formHtml = document.querySelector<HTMLFormElement>('#todo-form form')!

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()

    const values = getValues<Todo>(formHtml)
    add(values)
    list()
  }
  formHtml.addEventListener('submit', onSubmit)
}

function remove({ id }: Required<Pick<Todo, 'id'>>) {
  const todoList = get()
  if (!todoList) return
  const index = id - 1
  todoList.splice(index, 1)
  localStorage.setItem('todo-list', JSON.stringify(todoList))
  list()
}

export default function todoList() {
  addEvent()

  list()
}
