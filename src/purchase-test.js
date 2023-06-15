console.log("working (purchase-test)");

var items = [
    'football',
    'pen'
];
var modals = [];
var modals2= [];

var buyItem = (itemName, personName) => {
    console.log('Bought Stuffs ('+itemName+') for '+personName);
    //* Do firebase buy stuff *//
};

var count = items.length;
for(var i = 0; i < count; i++) {
    console.log(i);
    var item = items[i];
    console.log(item);

    //var tempModal = document.querySelector('.'+item+'-modal');
    //modals.push(tempModal);


    var openModal = document.querySelector('.'+item+'-modal-open');
    openModal.addEventListener('click', (event) => {
        //modals2.push('.'+item+'-modal');
        console.info('yay, button pressed');
        var modalName = event.target.innerHTML.toLowerCase();
        console.info(document.querySelector('.'+item+'-modal'));
        document.querySelector('.'+modalName+'-modal').showModal();
    });
    //modalCloseButtons.push(document.querySelector('.'+item+'-modal-close'));
    //purchaseButtons.push(document.querySelector('.'+item+'-purchase'));

    //var itemPerson = document.querySelector('.'+item+'-name');

    /*modalOpenButtons[i].addEventListener('click', () => {
        modals[i].showModal();
    });
    /*modalCloseButtons[i].addEventListener('click', () => {
        modals[i].close();
    });
    purchaseButtons[i].addEventListener('click', () => {
        buyItem(item, itemPerson);
    });*/

    console.log(i + item);
}
console.info('modals: '+modals);
console.log('finished');
