console.log("working (purchase-test)");

var items = [
    'football',
    'pen'
];

var buyItem = (itemName, personName) => {
    console.log('Bought Stuffs ('+itemName+')');
    //* Do firebase buy stuff *//
};

var count = items.length;
for(var i = 0; i < count; i++) {
    console.log(i);
    var item = items[i];
    console.log(item);
    
    var modal = document.querySelector('.'+item+'-modal');
    console.log('Modal: '+modal.getElementsByClassName('title')[0].innerHTML);
    var openModal = document.querySelector('.'+item+'-modal-open');
    var closeModal = document.querySelector('.'+item+'-modal-close');
    var purchaseItem = document.querySelector('.'+item+'-purchase');
    console.info('Purchase item' + purchaseItem);
    var itemPerson = document.querySelector('.'+item+'-name');

    openModal.addEventListener('click', () => {
        modal.showModal();
    });
    closeModal.addEventListener('click', () => {
        modal.close();
    });
    purchaseItem.addEventListener('click', () => {
        buyItem(item, itemPerson);
    });

    console.log(i + item);
}
console.log('finished');
