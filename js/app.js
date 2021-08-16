const nav_toggle = document.querySelector('.nav_toggle')
const nav_links = document.querySelectorAll('.nav__link')


nav_toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open')
})

nav_links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open')
    })
})