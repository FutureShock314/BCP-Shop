const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-button')
const closeModal = document.querySelector('.close-button')

openModal.addEventListener('click', () => {
    modal.showModal()
})

// closeModal.addEventListener('click', () => {
//     modal.close()
// })

// * play anim for hiding modal

closeModal.addEventListener('click', () => {
    modal.classList.add('hide');
    console.log('added hide')
    modal.addEventListener('animationend', function(){
        console.log('added event listener')
        modal.classList.remove('hide');
        console.log('removed "hide"')
        modal.close();
        modal.removeEventListener('animationend',  arguments.callee, false);
        console.log('removed animationend check')
    }, false);
})
