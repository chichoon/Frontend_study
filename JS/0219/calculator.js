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
//버튼들과 숫자표시영역 html로부터 불러오기
//eval 함수와 for문 통해서 한번에 불러오려 했으나 실패

let num_tmp = '';
let num = '';
let sign = '';
let signPressed = false;
let signPressed2 = false;
//계산기 작동 시 사용될 변수들 정의
//num_tmp는 첫 번째 숫자, num은 두 번째 숫자 입력받기
//sign은 직전에 입력했던 사칙연산 기호
//signPressed은 기호 버튼이 눌렸는지 여부
//signPressed2는 기호 버튼이 2회 이상 눌렸는지 여부
//(기호 버튼 누를 때마다 이전 결과값 도출용)

function showPanel(n){
    //숫자 표시영역에 결과값 표시하는 용도의 함수
    numberPanel.innerHTML = n;
}

function calculate(num1, num2, sign){
    //두 수와 입력받은 사칙연산 기호를 불러와서 연산하는 함수
    const num_1 = parseInt(num1), num_2 = parseInt(num2);
    //받아온 숫자 (string 상태) 를 정수형으로 변환하여 상수로 선언
    let result;
    //result는 sign의 종류에 따라 바뀌어야 하므로 let으로 선언
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
        //입력받은 sign의 종류에 따라서 결과값을 다르게 하기 위해
        //switch-case 문 사용
    }
    return result;
    //결과값 리턴
}

function handleClickNum(event){
    //숫자버튼 눌렀을 때 발생하는 이벤트 핸들러
    const btn = event.target;
    //입력받은 버튼의 종류 저장 (id 불러오기 위함)
    if(signPressed){
        //기호 버튼이 눌렸을 때 다음 숫자를 입력받기 위해
        //이전 숫자를 num_tmp에 저장하고 num을 새로 교체
        num_tmp = num;
        num = '';
        signPressed = false;
        //기호 플래그 적용 해제
    }
    num += btn.id; 
    //btn.id (숫자 종류) 를 num (string 자료형) 에 추가
    //정수형이 아닌 문자열이라 입력받으면 다음 자리수로 추가됨
    //(예시 : 35 + 4 = 354)
    showPanel(num);
    //입력받을 때마다 현재 입력한 수가 계산기 화면에 업데이트됨
}

function handleClickSign(event){
    //사칙연산기호 눌렀을 때 발생하는 이벤트 핸들러
    const btn = event.target;
    //버튼의 종류 받아오는 함수
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
    num = '0';
    num_tmp = '';
    showPanel(0);
    console.log("clear")
}

function handleClickEqual(event){
    const num1 = num_tmp, num2 = num;
    if(!num1){
        showPanel(num2);
    } else {
        const result = calculate(num1, num2, sign);
        showPanel(result);
        signPressed2 = false;
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