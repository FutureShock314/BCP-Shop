console.log("working (purchase-test)");

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
