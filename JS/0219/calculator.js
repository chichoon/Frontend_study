const id_0 = document.getElementById('0');
const id_1 = document.getElementById('1');
const id_2 = document.getElementById('2');
const id_3 = document.getElementById('3');
const id_4 = document.getElementById('4');
const id_5 = document.getElementById('5');
const id_6 = document.getElementById('6');
const id_7 = document.getElementById('7');
const id_8 = document.getElementById('8');
const id_9 = document.getElementById('9');
const id_c = document.getElementById('C');
const id_add = document.getElementById('add');
const id_sub = document.getElementById('sub');
const id_mul = document.getElementById('mul');
const id_div = document.getElementById('div');
const id_equ = document.getElementById('equ');
const numberPanel = document.querySelector('.result');

let num_tmp = '';
let num = '';
let sign = '';
let signPressed = false;

function handleClickNum(event){
    const btn = event.target;
    if(!signPressed){
        num += btn.id; 
        numberPanel.innerHTML = num;
        console.log(num);
    } else {
        num = '';
        num += btn.id; 
        signPressed = false;
    }
}

function handleClickSign(event){
    const btn = event.target;
    signPressed = true;
    num_tmp = num;
}

function handleClickClear(event){

}

function handleClickEqual(event){

}

function init(){
    id_0.addEventListener("click", handleClickNum);
    id_1.addEventListener("click", handleClickNum);
    id_2.addEventListener("click", handleClickNum);
    id_3.addEventListener("click", handleClickNum);
    id_4.addEventListener("click", handleClickNum);
    id_5.addEventListener("click", handleClickNum);
    id_6.addEventListener("click", handleClickNum);
    id_7.addEventListener("click", handleClickNum);
    id_8.addEventListener("click", handleClickNum);
    id_9.addEventListener("click", handleClickNum);
    id_add.addEventListener("click", handleClickSign);
    id_sub.addEventListener("click", handleClickSign);
    id_mul.addEventListener("click", handleClickSign);
    id_div.addEventListener("click", handleClickSign);
    id_equ.addEventListener("click", handleClickEqual);
    id_C.addEventListener("click", handleClickClear);
    console.log(id_0);
}
init();