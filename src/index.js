import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/explorer', "/pages/explorer.html")
router.add(404, "/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


// -------- //

const home = document.querySelector('#home')
const universe = document.querySelector('#universe')
const explorer = document.querySelector('#explorer')
const body = document.querySelector('body')

home.addEventListener('click', () => {
  home.classList.add('focus')
  universe.classList.remove('focus')
  explorer.classList.remove('focus')
  body.classList.remove('bg-universe')
  body.classList.remove('bg-explorer')
  body.classList.add('bg-home')
  

})

universe.addEventListener('click', () => {
  home.classList.remove('focus')
  universe.classList.add('focus')
  explorer.classList.remove('focus')
  body.classList.remove('bg-hero')
  body.classList.remove('bg-explorer')
  body.classList.add('bg-universe')
})

explorer.addEventListener('click', () => {
  home.classList.remove('focus')
  universe.classList.remove('focus')
  explorer.classList.add('focus')
  body.classList.remove('bg-hero')
  body.classList.add('bg-explorer')
  body.classList.remove('bg-universe')

})
