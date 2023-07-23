function visibleEl(el: HTMLElement, visible: boolean) {
  el.style.display = visible ? 'block' : 'none'
}

function login() {
  const el = document.querySelector<HTMLDivElement>('.login')!
  visibleEl(el, true)

  // logout func
  const logoutbtn = el.querySelector('#logout')!
  const onLogout = () => {
    localStorage.removeItem('user')
    visibleEl(el, false)
    logout()
  }
  logoutbtn.addEventListener('click', onLogout)
}

function logout() {
  const el = document.querySelector<HTMLDivElement>('.logout')!
  visibleEl(el, true)

  // login func
  const form = el.querySelector('form')!
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    const values = new FormData(form)
    const user = {
      username: values.get('username'),
    }
    localStorage.setItem('user', JSON.stringify(user))
    visibleEl(el, false)
    login()
  }
  form.addEventListener('submit', onSubmit)
}

export { login, logout }
