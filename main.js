'use strict';

{
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    // 合計の数字が入る
    var p = document.querySelector('p');
    var coin = 0;
    

    //　ボタンをクリックしたら数字が追加される
    btn1.addEventListener('click', () => {
        coin++;
        p.textContent = coin;
        btn1.classList.add('disabled');
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