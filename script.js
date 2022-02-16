let drop_down = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let button_back = document.querySelector('#button_back')
let arrow_down = document.querySelector('#arrow_down')

drop_down.addEventListener('click', (event) => {
    event.preventDefault();
    if (social.classList.contains('display__none')) {
        arrow_down.classList.toggle('arrow__subclass')
    }
    else if (!social.classList.contains('display__none')) {
        arrow_down.classList.toggle('arrow__subclass')
    }
    social.classList.toggle('display__none')
})

button_back.addEventListener('click', () => {
    console.log('hello')
    window.history.back()
})