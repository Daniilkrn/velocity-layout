import { tabSec } from "./tabSec.js";

const allLinks = document.querySelectorAll('a');
document.addEventListener('DOMContentLoaded', setLocalStorageItems);

function setLocalStorageItems () {
    const tabSectionsImageMain = document.querySelector('.tadsec-items__image');
    const tabSectionsTabs = document.querySelectorAll('.tadsec-items__btn');
    const tabSectionSubNodesText = document.querySelector('.tabsec-sub').querySelectorAll('.tabsec-sub__desc');
    const tabSectionSubNodesTitle = document.querySelector('.tabsec-sub').querySelectorAll('.tabsec-sub__title')

    tabSec();

    const currentLocalTab = localStorage.getItem('tabSec-tab');

    if(currentLocalTab === null){
        tabSectionsImageMain.src = './src/images/tabsec-1.jpg';
    }

    if(currentLocalTab){
        tabSectionsImageMain.src = localStorage.getItem('tabSec-image');

        tabSectionsTabs.forEach(btn => {
            btn.classList.toggle('tadsec-items__btn--active', false);
        });
        
        tabSectionSubNodesText.forEach(txt => {
            txt.classList.toggle('visible', false);
        });

        tabSectionSubNodesTitle.forEach(title => {
            title.classList.toggle('visible', false);
        });

        tabSectionsTabs[currentLocalTab - 1].classList.toggle('tadsec-items__btn--active', true);
        tabSectionSubNodesTitle[currentLocalTab - 1].classList.toggle('visible', true);
        tabSectionSubNodesText[currentLocalTab - 1].classList.toggle('visible', true);
    }
}

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});