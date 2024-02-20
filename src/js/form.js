const signUpForm = document.querySelector('.sign-up-form')
const btnSubmit = document.querySelector('.sign-up-form__btn')
const inputsLabels = document.querySelectorAll('.sign-up-form__label')
const inputs = document.querySelectorAll('.sign-up-form__input')
const passwordCheck = document.querySelector('.modal__password-seen-btn')

btnSubmit.addEventListener('click', handleFormSubmit)

inputs.forEach(input => input.addEventListener('input', () => {

    if (input.value) {
        input.classList.toggle('sign-up-form__input--error', false)
    }
}))

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(signUpForm)
}

function serializeForm(formNode) {
    const { elements } = formNode
    const passwordFieldMain = []
    Array.from(elements)
        .forEach((element) => {
            const { name, value, id } = element

            if (!value.length) {
                return element.classList.toggle('sign-up-form__input--error', true);
            }

            if (element.type === 'password') {
                passwordFieldMain.push(element.value)
            };

        })

    const setPass = new Set(passwordFieldMain)


    if (setPass.size === 1) {

        return inputs.forEach((input,idx) => {

            if(!input.value) return

            if(input.name === 'password' || input.name === 'password-repeat'){
                console.log(inputsLabels[idx]);
                inputsLabels[idx].classList.toggle('sign-up-form__label--active', true)
                inputsLabels[idx].classList.toggle('sign-up-form__label--disable', false)
            } 
        })
    }

    
    return inputsLabels.forEach((label,idx) => {
        label.classList.toggle('sign-up-form__label--disable', true)
        label.classList.toggle('sign-up-form__label--active', false)
    })
}

passwordCheck.addEventListener('click', passwordCheckFN)

let inputPassStatus = true;
function passwordCheckFN() {

    inputs.forEach(input => {
        if(input.name === 'password' || input.name === 'password-repeat'){
            inputPassStatus ? input.type = 'text' : input.type = 'password'
        }
    })

    inputPassStatus ? passwordCheck.innerHTML = 'Скрыть пароли' : passwordCheck.innerHTML = 'Показать пароли'
    inputPassStatus = !inputPassStatus
}


