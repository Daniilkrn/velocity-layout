const scrollUpBtn = document.querySelector('.scroll-up')
const footer = document.querySelector('.footer')
const header =  document.querySelector('.header')

window.addEventListener('scroll', scrollHandler)

function scrollHandler () {
    if(window.scrollY >= 30){
        scrollUpBtn.classList.toggle('scroll-up--active', true)
    } else {
        scrollUpBtn.classList.toggle('scroll-up--active', false)
    }
}

scrollUpBtn.addEventListener('click', (e) => {
    console.log(e.target);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})