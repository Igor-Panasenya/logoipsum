function humburgerMenu() {
    const menu = document.querySelector('#menu')
    const humburger = document.querySelector('.hamburger')

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('active')
        menu.classList.toggle('hidden')

    })
}
humburgerMenu()

// DARK MODE
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

const modeBtn = document.querySelector('#mode')

modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark')

    if(document.querySelector('html').classList.contains('dark')) {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }
})