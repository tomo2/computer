'use strict';

{
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    // 合計の数字が入る
    var p = document.querySelector('p');
    var coin = 0;

    function dsd1() {
        btn1.classList.add('disabled');
        btn2.classList.add('disabled');
        btn3.classList.add('disabled');
    }
    function dsd2() {
        btn4.classList.add('disabled');
        btn5.classList.add('disabled');
        btn6.classList.add('disabled');
    }
    function dsd3() {
        btn7.classList.add('disabled');
        btn8.classList.add('disabled');
        btn9.classList.add('disabled');
    }

    //　ボタンをクリックしたら数字が追加される
    btn1.addEventListener('click', () => {
        coin++; //　合計に数字を追加
        p.textContent = coin;
        // 二回目のクリックをできないようにする。
        dsd1();
    });

    btn2.addEventListener('click', () => {
        coin = coin + 10;
        p.textContent = coin;
       dsd1();
    });

    btn3.addEventListener('click', () => {
        coin = coin + 100;
        p.textContent = coin;
        dsd1();
    });

     btn4.addEventListener('click', () => {
        coin = coin + 2; //　合計に数字を追加
        p.textContent = coin;
        // 二回目のクリックをできないようにする。
       dsd2();
    });

    btn5.addEventListener('click', () => {
        coin = coin + 20;
        p.textContent = coin;
        dsd2();
    });

    btn6.addEventListener('click', () => {
        coin = coin + 200;
        p.textContent = coin;
        dsd2();
    });

     btn7.addEventListener('click', () => {
        coin++;
        p.textContent = coin;
        dsd3();
    });

    btn8.addEventListener('click', () => {
        coin = coin + 10;
        p.textContent = coin;
        dsd3();
    });

    btn9.addEventListener('click', () => {
        coin = coin + 100;
        p.textContent = coin;
        dsd3();
    });
    
}