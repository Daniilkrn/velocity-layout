const tabSections = document.querySelectorAll('.tadsec-items__btn')
const tabSectionsImage = document.querySelector('.tadsec-items__image')

tabSections.forEach(el => {

    let currentTab = 1

    el.addEventListener('click', () => {
        currentTab = el.id

        tabSectionsImage.src = `./src/images/tabsec-${currentTab}.jpg`

        localStorage.setItem('tabSec-image', tabSectionsImage.src)
        localStorage.setItem('tabSec-tab', currentTab)

        tabSections.forEach(btn => {
            btn.classList.toggle('tadsec-items__btn--active', false)
        })

        el.classList.toggle('tadsec-items__btn--active', true)
    })

})

