import './style.css'
import { login, logout } from './auth.ts'
import setupClock from './clock.ts'
import { User } from '../type/user.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>졸업 작품</h1>
    <div id="clock"></div>
    <div class="login">
      <div class="card">
        <button id="logout" type="button">Logout</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
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
} else {
  logout()
}
