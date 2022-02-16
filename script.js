let drop_down = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let button_back = document.querySelector('#button_back')
let arrow_down = document.querySelector('#arrow_down')

drop_down.addEventListener('click', (event) => {
    event.preventDefault();
    if (social.classList.contains('display__none')) {
        arrow_down.classList.toggle('arrow__animation')
        social.classList.add('animation__down')
        social.classList.remove('animation__up')
    }
    else if (!social.classList.contains('display__none')) {
        arrow_down.classList.toggle('arrow__animation')
    }
    social.classList.toggle('display__none')
})

button_back.addEventListener('click', () => {
    console.log('hello')
    window.history.back()
})