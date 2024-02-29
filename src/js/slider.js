let sliderArea = document.querySelector('.slider-container')
const rightBtn = document.querySelector('.right')
const leftBtn = document.querySelector('.left')
let items = document.querySelectorAll('.services-items__link')
const navigation = document.querySelector('.navigation')
const pagination = document.querySelector('.pagination')
const header = document.querySelector('.header-main')

let loop = true
let count = 0;
let countPages = 2;
let pos = 0
let sections

rightBtn.addEventListener('click', (e) => {
    loop = false

    new Slider(e.target.id, loop).toSwipe()
    new Pagination(e.target.id).pagination()

})

leftBtn.addEventListener('click', (e) => {
    loop = false

    new Slider(e.target.id, loop).toSwipe()
    new Pagination(e.target.id).pagination()
})

for (let i = 0; i < items.length / 2; i++) {
    let html = `<span class="pagination-section"></span>`

    pagination.innerHTML += html
}

sections = document.querySelectorAll('.pagination-section')
sections[pos].style.background = 'gray'

const swipeAuto = setInterval(() => {
    new Slider('right', true).toSwipe()
    new Pagination('right', true).pagination()
}, 3000);

class Slider {
    constructor(id, loop) {
        this.id = id
        this.loop = loop
    }

    toSwipe() {
        if (this.id === 'left') {
            if (countPages === 2) return

            if(!this.loop) clearInterval(swipeAuto)

            countPages -= 2

            if (countPages === 2) leftBtn.classList.toggle('opacity', false)

            let splice

            splice = Array.from(items).splice(countPages - 2, countPages)

            sliderArea.innerHTML = ''

            for (let i = 0; i < splice.length; i++) {
                sliderArea.appendChild(splice[i])
            }

            leftBtn.classList.toggle('left--active', true)
            sliderArea.classList.toggle('transition-left', true)

            leftBtn.addEventListener('animationend', () => {
                leftBtn.classList.toggle('left--active', false)
                sliderArea.classList.toggle('transition-left', false)
            })
        }

        if (this.id === 'right') {
            if(!this.loop) clearInterval(swipeAuto)

            if (countPages === items.length) {
                leftBtn.classList.toggle('opacity', false)
                countPages = 0
            }

            countPages += 2

            if (countPages > 2) leftBtn.classList.toggle('opacity', true)

            this.countP = countPages

            let splice

            if (countPages >= 2) splice = Array.from(items).splice(countPages - 2, countPages)

            sliderArea.innerHTML = ''

            for (let i = 0; i < splice.length; i++) {
                sliderArea.appendChild(splice[i])
            }

            rightBtn.classList.toggle('right--active', true)
            
            // sliderArea.classList.toggle('transition-right', true)

            rightBtn.addEventListener('animationend', () => {
                rightBtn.classList.toggle('right--active', false)
                sliderArea.classList.toggle('transition-right', false)
            })

            if(this.loop){
                sliderArea.addEventListener('animationend', () => {
                    sliderArea.classList.toggle('transition-right', false)
                })
            }
        }
    }
}

class Pagination extends Slider {
    constructor(id) {
        super(id)
        this.id = id
    }

    pagination() {

        if (this.id === 'right') {
            pos++;
        }

        if (this.id === 'left') {
            if(pos === 0){
                return
            }
            pos--;
        }

        if(pos  === items.length / 2){
            pos = 0
        }

        [...sections].forEach(el => {
            el.style.background = 'white'
        });

        return sections[pos].style.background = 'gray'
    }
}

//media
const mediaQuery = window.matchMedia('(min-width: 1259px)')

function screenTest(e) {
    if (e.matches) {
        // if(window.scrollY > header.clientHeight){
        //     header.style.cssText = 'position: fixed; top: 0; left: 0; z-index: 140'
        // } 
    } else {

    }
}

mediaQuery.addListener(screenTest)