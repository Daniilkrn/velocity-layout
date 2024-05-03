const tabSections = document.querySelectorAll('.tadsec-items__btn');
const tabSectionsImage = document.querySelector('.tadsec-items__image');
const tabSectionSubNodesText = document.querySelector('.tabsec-sub').querySelectorAll('.tabsec-sub__desc');
const tabSectionSubNodesTitle = document.querySelector('.tabsec-sub').querySelectorAll('.tabsec-sub__title')

export function tabSec () {
    tabSections.forEach(el => {

        let currentTab = 1;
        tabSectionSubNodesText[currentTab].classList.add = 'visible';
        tabSectionSubNodesText[currentTab - 1].classList.toggle('visible', true);
        tabSectionSubNodesTitle[currentTab - 1].classList.toggle('visible', true);
        
        el.addEventListener('click', () => {
            currentTab = el.id
            let tabText = tabSectionSubNodesText[currentTab - 1].innerHTML;
            let tabTitle = tabSectionSubNodesText[currentTab - 1].innerHTML;
            
            tabSectionsImage.src = `./src/images/tabsec-${currentTab}.jpg`
    
            localStorage.setItem('tabSec-image', tabSectionsImage.src);
            localStorage.setItem('tabSec-tab', currentTab);
            localStorage.setItem('tabSec-text', tabText);
            localStorage.setItem('tabSec-text', tabTitle);

            tabSections.forEach(btn => {
                btn.classList.toggle('tadsec-items__btn--active', false)
            })
    
            tabSectionSubNodesText.forEach(txt => {
                txt.classList.toggle('visible', false)
            })
            
            tabSectionSubNodesTitle.forEach(title => {
                title.classList.toggle('visible', false)
            })

            tabSectionSubNodesText[currentTab - 1].classList.toggle('visible', true);
            tabSectionSubNodesTitle[currentTab - 1].classList.toggle('visible', true);
            el.classList.toggle('tadsec-items__btn--active', true)
        })
    })
}