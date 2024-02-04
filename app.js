const btnUp = document.querySelector('.back-to-top');


btnUp.addEventListener('click', ()=> {
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    })

})