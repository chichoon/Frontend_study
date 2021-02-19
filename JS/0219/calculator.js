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
let signPressed2 = false;

function showPanel(n){
    numberPanel.innerHTML = n;
}

function calculate(num1, num2, sign){
    const num_1 = parseInt(num1), num_2 = parseInt(num2);
    let result;
    switch(sign){
        case 'add':
            result = num_1 + num_2;
            break;
        case 'sub':
            result = num_1 - num_2;
            break;
        case 'mul':
            result = num_1 * num_2;
            break;
        case 'div':
            result = num_1 / num_2;
            break;
    }
    return result;
}

function handleClickNum(event){
    const btn = event.target;
    if(signPressed){
        num_tmp = num;
        num = '';
        signPressed = false;
    }
    num += btn.id; 
    showPanel(num);
}

function handleClickSign(event){
    const btn = event.target;
    sign = btn.id;
    const num1 = num_tmp, num2 = num;
    if(signPressed2){
        const result = calculate(num1, num2, sign);
        showPanel(result);
        num = result;
    } else {
        signPressed2 = true;
    }
    console.log(`num1 : ${num1}, num2 = ${num2}`);
    signPressed = true;
}

function handleClickClear(){
    num = '';
    num_tmp = '';
    showPanel(0);
    console.log("clear")
}

function handleClickEqual(event){
    const num1 = num_tmp, num2 = num;
    if(!num1){
        const result = calculate(num1, num2, sign);
        showPanel(result);
        signPressed2 = false;
    } else {
        showPanel(num2);
    }
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
    id_c.addEventListener("click", handleClickClear);
    console.log(id_c);
}
init();