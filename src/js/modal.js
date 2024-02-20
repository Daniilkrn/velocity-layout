const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const authLink = document.querySelector('.auth-link');

authLink.addEventListener('click', () => setModal(modal))
closeModal.addEventListener('click', () => setModal(modal))

function setModal(targetEl) {

    let modalStatus = true

    if (targetEl.classList.contains('modal--active')) {
        modalStatus = false
    }

    targetEl.classList.toggle('modal--active', modalStatus)
}

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.toggle('modal--active', false)
    }
})