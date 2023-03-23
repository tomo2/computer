'use strict';

{
    const btn1 = document.getElementById('btn1');
    
    var p = document.querySelector('p');
    p = 0;

    btn1.addEventListener('click', () => {
        p++;
        console.log(p);
    });
    p.textContent = p;
}