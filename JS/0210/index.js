console.log(console);
//log로 console를 찍어보면 function 객체들로 이루어진 object임을 알 수 있음

function helloBot(){ //함수 정의
    console.log("hello!");
    //함수 내용 채우기
}
helloBot(); //함수 불러오기

function helloBotWithArg(argument){ //인자 받아오기
    console.log("hello,", argument, "!"); //인자와 함께 print 출력
}
helloBotWithArg("Chichoon"); //chichoon이라는 string 인자 부여
//결과물 : hello, Chichoon!
//console.log는 comma 사이사이에 자동 띄어쓰기가 되는듯

helloBotWithArg("Chichoon", 15);
//결과물 : hello, Chichoon!
//콤마 뒤의 인자값은 함수 내부에서 쓰이지 않기 때문

function complicatedFunc(arg1, arg2){ //여러개의 인자
    console.log("Hello,", arg1, "What is", arg2, "?");
    //인자 2개를 함수 내에서 사용할때
}
complicatedFunc("Chichoon", 400);
//결과물 : Hello, Chichoon What is 400?

////////////////////////////////////////////////////

function backTicks(arg1, arg2){
    console.log(`This is backticks, ${arg1} and ${arg2} shows up`);
    //따옴표 ('', "") 가 아닌 backticks (``) 사용
    //따옴표와 , 또는 +를 이용해서 string을 연결하는 것보다 보기 좋다
}
backTicks("pizza", "chicken");
//결과물 : This is backticks, pizza and chicken shows up

const constant1 = backTicks("potato", "pizza");
//함수에 인자를 넣은 상태에서 상수로 정의

console.log(constant1);
//결과물 : This is backticks, potato and pizza shows up undefined
//undefined 이유 : constant1을 console.log에서 사용하면서 constant1에 정의된 함수는 실행되나,
//정작 console.log로 출력할 값은 함수에서 return하고 있지 않기 때문

function returnSth(arg1, arg2){
    return `I'm ${arg1} and this is ${arg2}`;
    //결과 string을 return한다
}
const constant2 = returnSth("talking potato", "babo");
console.log(constant2);
//constant2에 해당하는 함수 returnSth가 제대로 값을 return하고 있기 때문에
//console.log가 출력할 수 있는 요소가 존재한다

const calculator = {
    plus: function(arg1, arg2){
        return arg1 + arg2;
    },
    minus: function(arg1, arg2){
        return arg1 - arg2;
    },
    multiple: function(arg1, arg2){
        return arg1 * arg2;
    },
    division: function(arg1, arg2){
        return arg1 / arg2;
    },
    modulo: function(arg1, arg2){
        return arg1 % arg2;
    },
    power: function(arg1, arg2){
        return arg1 ** arg2;
    }
}
//Object 내에 여러 Function 구현하기

console.log(calculator.division(5,5));