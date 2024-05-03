const menuLinks = document.querySelectorAll('.menu-link');
const contact = document.querySelector('.menu-link.contact-link');
const home = document.querySelector('.menu-link.home-link');

contact.addEventListener('click', () => setPage(contact))
index.addEventListener('click', () => setPage(home))

function setPage (selector) {
  
    if (selector.classList.contains('menu-link--active')) return
 
    if(selector.id === 'index'){
        return window.location.href = `../../${selector.id}.html`
    }

    window.location.href = `./${selector.id}.html`
}

function getQueryAll(selector, targetEl) {

    if (selector.includes('--active')) return

    const nodelist = document.querySelectorAll(`.${selector}`)

    nodelist.forEach(el => {
        el.classList.toggle(`${selector}--active`, false)
    })

    return targetEl.classList.toggle(`${selector}--active`, true)
}