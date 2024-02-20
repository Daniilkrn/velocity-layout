import { tabSec } from "./tabSec.js";

const allLinks = document.querySelectorAll('a')
document.addEventListener('DOMContentLoaded', setLocalStorageItems)

function setLocalStorageItems () {
    const tabSectionsImageMain = document.querySelector('.tadsec-items__image');
    const tabSectionsTabs = document.querySelectorAll('.tadsec-items__btn');
    
    tabSec()

    const currentLocalTab = localStorage.getItem('tabSec-tab')
    const currentLocalSrc = localStorage.getItem('tabSec-image')

    if(currentLocalTab === null){
        tabSectionsImageMain.src = './src/images/tabsec-1.jpg'
    }

    if(currentLocalTab){
        tabSectionsImageMain.src = localStorage.getItem('tabSec-image');

        tabSectionsTabs.forEach(btn => {
            btn.classList.toggle('tadsec-items__btn--active', false)
        })
        
        tabSectionsTabs[currentLocalTab - 1].classList.toggle('tadsec-items__btn--active', true)
    }
}

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
})