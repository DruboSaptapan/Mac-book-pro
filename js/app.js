function pcConfiguration(extra, isZero, charge) {
    const extraCharge = document.getElementById(extra+'-charge');

    if (isZero == 1) {
        extraCharge.innerText = charge;
    }
    else if (isZero == 0){
        extraCharge.innerText = charge;
    }
    else{
        extraCharge.innerText = charge;
    }


    const bestPrice = parseInt(document.getElementById('fixed-price').innerText);
    const memoryCharge = parseInt(document.getElementById('memory-charge').innerText);
    const storageCharge = parseInt(document.getElementById('storage-charge').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCharge + storageCharge + deliveryCharge;

}
/*---------- memory ----------*/
document.getElementById('8gb-memory').addEventListener('click', function(){
    pcConfiguration('memory', 1, 0);
})

document.getElementById('16gb-memory').addEventListener('click', function(){
    pcConfiguration('memory', 0, 180);
})



/*---------- storage ----------*/
document.getElementById('256gb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 1, 0);
})

document.getElementById('512gb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 0, 100);
})

document.getElementById('1tb-storage').addEventListener('click', function(){
    pcConfiguration('storage', 2, 180);
})



/*---------- delivery charge ----------*/
document.getElementById('aug-27').addEventListener('click', function(){
    pcConfiguration('delivery', 1, 0);
})

document.getElementById('aug-21').addEventListener('click', function(){
    pcConfiguration('delivery', 0, 20);
})