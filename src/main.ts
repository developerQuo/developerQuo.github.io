import './style.css'
import { login, logout } from './auth.ts'
import setupClock from './clock.ts'
import { User } from '../type/user.ts'
import todoList from './todo.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>졸업 작품</h1>
    <div id="clock"></div>
    <div class="login">
      <div class="card">
        <button id="logout" type="button">Logout</button>
      </div>
      <h2>Todo List</h2>
      <div id="todo-form">
        <form class="inline-form">
          <input name="title" type="text" placeholder="Title" required />
          <textarea name="content" placeholder="Content" required></textarea>
          <button>Add</button>
        </form>
      </div>
      <div id="todo-list" class="card">
        <ul>
        </ul>
      </div>
    </div>
    <div class="logout">
      <form>
        <div>
          <label for="username">Username</label>
          <input name="username" type="text" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" type="password" required />
        </div>
        <div class="card">
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
`

setupClock(document.querySelector<HTMLDivElement>('#clock')!)

const strUser = localStorage.getItem('user')
if (strUser) {
  login()
  todoList()
} else {
  logout()
}
