console.log("working (purchase-test)")

const modal = document.querySelector('.football-modal')
const openModal = document.querySelector('.football-modal-open')
const closeModal = document.querySelector('.football-modal-close')

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
