console.log("working (purchase-test)");

var items = [
    'football',
    'pen'
];
var modals = [];
var modalOpenButtons = [];
var modalCloseButtons = [];
var purchaseButtons = [];

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

    document.querySelector('.'+item+'-modal-open').addEventListener('click', () => {
        document.querySelector('.'+item+'-modal').showModal();
    })
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
