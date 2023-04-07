'use strict';

{
    // ボタンを取得
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const btn7 = document.getElementById('btn7');
    const btn8 = document.getElementById('btn8');
    const btn9 = document.getElementById('btn9');
    const reset = document.getElementById('reset');

    // 合計の数字が入る
    var p = document.querySelector('p');
    var coin = 0;

    function dsd1() {
        btn1.classList.add('disabled');  //ボタンをクリックしたら３つのボタンが押せなくなる。
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


    function btnAll(btn) {
        btn.addEventListener('click', () => {
                coin++; 
                p.textContent = coin;
                dsd1();
    });
    }


    //　ボタンをクリックしたら数字が追加される
    btn1.addEventListener('click', () => {
        coin++; //　合計に数字を追加
        p.textContent = coin;
        // 二回目のクリックをできないようにする。
        dsd1();
    });

     btnAll(btn2);
     btnAll(btn3);

     btnAll(btn4);
     btnAll(btn5);
     btnAll(btn6);

     btnAll(btn7);
     btnAll(btn8);
     btnAll(btn9);


    reset.addEventListener('click', () => {
        btn1.classList.remove('disabled');
        btn2.classList.remove('disabled');
        btn3.classList.remove('disabled');
        btn4.classList.remove('disabled');
        btn5.classList.remove('disabled');
        btn6.classList.remove('disabled');
        btn7.classList.remove('disabled');
        btn8.classList.remove('disabled');
        btn9.classList.remove('disabled');

        p.textContent = 0;
        coin =  0;
    });
    
}