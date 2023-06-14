var items = [
    'football',
    'pen'
];

var count = items.length;
for(var i = 0; i < count; i++) {
    console.log(i);
    var item = items[i];
    console.log(item);
    
    var modal = document.querySelector('.'+item+'-modal');
    var openModal = document.querySelector('.'+item+'-modal-open');
    var closeModal = document.querySelector('.'+item+'-modal-close');

    openModal.addEventListener('click', () => {
        modal.showModal();
    });
    closeModal.addEventListener('click', () => {
        modal.close();
    });        

    console.log(i + item);
}
console.log('finished');





console.log("working (purchase-test)");

const o_modal = document.querySelector('.football-modal');
const o_openModal = document.querySelector('.football-modal-open');
const o_closeModal = document.querySelector('.football-modal-close');

o_openModal.addEventListener('click', () => {
    o_modal.showModal();
});

o_closeModal.addEventListener('click', () => {
    o_modal.close();
});

// * play anim for hiding modal

closeModal.addEventListener('click', () => {
    modal.classList.add('hide');
    console.log('added hide');
    modal.addEventListener('animationend', function(){
        console.log('added event listener');
        modal.classList.remove('hide');
        console.log('removed "hide"');
        modal.close();
        modal.removeEventListener('animationend',  arguments.callee, false);
        console.log('removed animationend check');
    }, false);
});
