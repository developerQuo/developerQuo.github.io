import './style.css'
import setupClock from './clock.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id="clock"></div>
  </div>
`

setupClock(document.querySelector<HTMLDivElement>('#clock')!)
