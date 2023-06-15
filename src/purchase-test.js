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

    var openModal = document.querySelector('.'+item+'-modal-open');
    console.log("openModal set");
    openModal.addEventListener('click', (event) => {
        var modalName = event.target.innerHTML.toLowerCase();
        console.log("modalName set")
        console.info(document.querySelector('.'+item+'-modal'));
        document.querySelector('.'+modalName+'-modal').showModal();
    });
    console.log('added open event listener for '+item);

    var closeModal = document.querySelector('.'+item+'-modal-close');
    closeModal.addEventListener('click', (event) => {
        console.info('yay, close button pressed');
        var modalName = event.target.id.toLowerCase();
        console.log('modalName: \''+modalName+'\'');
        console.info(document.querySelector('.'+item+'-modal'));
        document.querySelector('.'+modalName+'-modal').close();
    });
    console.log('added close event listener for '+item);

    /*var purchaseButton = document.querySelector('.'+item+'-modal-open');
    purchaseButton.addEventListener('click', (event) => {
        console.info('yay, button pressed');
        var itemName = event.target.innerHTML.toLowerCase();
        console.info(document.querySelector('.'+itemName+'-purchase'));
        document.querySelector('.'+itemName+'-purchase');
    });*/
    console.log(i + item);
}
console.log('finished');
