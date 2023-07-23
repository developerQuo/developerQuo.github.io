import './style.css'
import { login, logout } from './auth.ts'
import setupClock from './clock.ts'
import todoList from './todo.ts'
import { onChangeBg } from './background.ts'
import weather from './weather.ts'

onChangeBg()
setupClock(document.querySelector<HTMLDivElement>('#clock')!)

const strUser = localStorage.getItem('user')
if (strUser) {
  login()
  weather()
  todoList()
} else {
  logout()
}
