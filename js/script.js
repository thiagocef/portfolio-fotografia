// const animate = document.querySelectorAll('[data-anime]')
const animate1 = document.querySelectorAll('[data-anime="columm-1"]'),
      animate2 = document.querySelectorAll('[data-anime="columm-2"]'),
      animate3 = document.querySelectorAll('[data-anime="columm-3"]')

animeScroll()
function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 0.70) 

    animate1.forEach(item => {

        if(windowTop > item.offsetTop) {
            item.classList.add('show-element-1')
        } else {
            item.classList.remove('show-element-1')
        }

    })

    animate2.forEach(item => {

        if(windowTop > item.offsetTop) {
            item.classList.add('show-element-2')
        } else {
            item.classList.remove('show-element-2')
        }

    })

    animate3.forEach(item => {

        if(windowTop > item.offsetTop) {
            item.classList.add('show-element-3')
        } else {
            item.classList.remove('show-element-3')
        }

    })
}
window.addEventListener('scroll', animeScroll)