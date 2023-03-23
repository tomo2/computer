'use strict';

{
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    
    var p = document.querySelector('p');
    var coin = 0;
    

    btn1.addEventListener('click', () => {
        coin++;
        p.textContent = coin;
    });

    btn2.addEventListener('click', () => {
        coin = coin + 10;
        p.textContent = coin;
    });

    btn3.addEventListener('click', () => {
        coin = coin + 100;
        p.textContent = coin;
    });
    
}