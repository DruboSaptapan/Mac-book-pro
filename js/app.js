function pcConfiguration(extra, charge) {
    const extraCharge = document.getElementById(extra+'-charge');
    extraCharge.innerText = charge;
    calculateTotal()
}


function getInputValue(extra) {
    const extraCharge = parseInt(document.getElementById(extra + '-charge').innerText);
    return extraCharge;
}


function calculateTotal() {
    const memoryCharge = getInputValue('memory');
    const storageCharge = getInputValue('storage');
    const deliveryCharge = getInputValue('delivery');

    const bestPrice = parseInt(document.getElementById('fixed-price').innerText);
    const totalPrice = bestPrice + memoryCharge + storageCharge + deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;

    const promoCodeResult = document.getElementById('promo-code-result');
    promoCodeResult.innerText = document.getElementById('total-price').innerText;
}
/*---------- memory ----------*/
document.getElementById('8gb-memory').addEventListener('click', function(){
    pcConfiguration('memory', 0);
})

document.getElementById('16gb-memory').addEventListener('click', function(){
    pcConfiguration('memory', 180);
})


/*---------- storage ----------*/
document.getElementById('256gb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 0);
})

document.getElementById('512gb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 100);
})

document.getElementById('1tb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 180);
})


/*---------- delivery charge ----------*/
document.getElementById('aug-27').addEventListener('click', function(){
    pcConfiguration('delivery', 0);
})

document.getElementById('aug-21').addEventListener('click', function(){
    pcConfiguration('delivery', 20);
})


/*---------- for promo code ----------*/
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeInputValue = promoCodeInput.value;

    /*---------- promo code condition ----------*/
    if (promoCodeInputValue == 'stevekaku') {
        const promoCodeResult = document.getElementById('total-price');
        const total = parseInt(promoCodeResult.innerText);
        const promoCodeTotal = total-(total*0.2)

        document.getElementById('promo-code-result').innerText = promoCodeTotal;
    }
    promoCodeInput.value = '';
})