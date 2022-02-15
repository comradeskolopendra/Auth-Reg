let arrow_down = document.querySelector('#arrow_down')
let arrow_up = document.querySelector('#arrow_up')
let drop_down = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let button_back = document.querySelector('#button_back')

drop_down.addEventListener('click', (event) => {
    event.preventDefault();
    social.classList.toggle('display__none')
    arrow_down.classList.toggle('display__none')
    arrow_up.classList.toggle('display__none')
})

button_back.addEventListener('click', () => {
    console.log('hello')
    window.history.back()
})