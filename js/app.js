/*---------- memory ----------*/
document.getElementById('8gb-memory').addEventListener('click', function(){
    const memory8gb = document.getElementById('memory-price');
    memory8gb.innerText = 0;
})

document.getElementById('16gb-memory').addEventListener('click', function(){
    const memory16gb = document.getElementById('memory-price');
    memory16gb.innerText = 180;
})



/*---------- storage ----------*/
document.getElementById('256gb-storage').addEventListener('click', function(){
    const storage256gb = document.getElementById('storage-price');
    storage256gb.innerText = 0;
})

document.getElementById('512gb-storage').addEventListener('click', function(){
    const storage512gb = document.getElementById('storage-price');
    storage512gb.innerText = 100;
})

document.getElementById('1tb-storage').addEventListener('click', function(){
    const storage1tb = document.getElementById('storage-price');
    storage1tb.innerText = 180;
})



/*---------- delivery charge ----------*/
document.getElementById('aug-27').addEventListener('click', function(){
    const aug27 = document.getElementById('delivery-charge');
    aug27.innerText = 0;
})

document.getElementById('aug-21').addEventListener('click', function(){
    const aug21 = document.getElementById('delivery-charge');
    aug21.innerText = 20;
})