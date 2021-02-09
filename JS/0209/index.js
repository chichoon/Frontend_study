let a = 415;
let b = a - 115;
//변수선언 및 초기화 (a를 생성 후 415로 초기화)
//이미 생성된 변수를 사용할 땐 let 필요 없다
a = 5;
//a를 선언한 게 아니고 사용한 거라 let 안 씀
console.log(b, a);
//콘솔창에 출력 : b의 값과 a의 값
//b는 이전에 들어간 415 - 115가 그대로 있지만
//a는 5로 교체되었다

/*
const c = 500;
c = 5;
//TypeError : constant (상수) 에 값을 새로 할당할 수 없음
*/

console.log(c);
var c = 500;
//var은 hoisting이 가능해 c의 선언 여부가 미리 메모리에 들어가고,
//코드 구동 시엔 c가 선언되었다고 인식하기 때문에 console.log에 에러가 X
//허나 선언부만 메모리에 들어가고, 초기화는 들어가지 않기 때문에 undefined라고 나옴

/*
console.log(d);
let d = 500;
//ReferenceError : 초기화 전에 변수 d에 접근할 수 없음
*/

///////////////////////////////////////////////////////
//왠만한 경우에는 const 사용, 정말 필요할 때만 let 사용
const hello = "chichoon";
// string 내용은 쌍따옴표 "" 로 감싸준다
console.log(hello);
//실행시키면 chichoon이 뜬다

const haha = false;
//boolean : true / false

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//Array 선언
console.log(daysOfWeek)

const chichoon = {
    name : "chichoon", //string 쌍따옴표로 표시 잊지않기
    school : "konkuk", 
    age : 24, //int
    quote : "byebye",
    babo : true, //boolean
    height : 164.5, //float
    food : ["choco", "mintchoco", "sushi"], //object 안의 list
    game : [
        {
            name : "rainworld", 
            fun : true
        }, //Object나 list의 구분자 콤마 잊지말기
        {
            name : "LoL", 
            fun : false
        }
    ]//list 안의 object
}
//Object 선언

console.log(chichoon.name)
//chichoon Object의 name 라벨에 해당하는 값에 접근

console.log(chichoon.game[0].name)
//chichoon object의 game 라벨에 해당하는 리스트 
//첫번째 값의 name 라벨에 해당하는 값에 접근