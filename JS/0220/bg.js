const body = document.querySelector("body");

const IMG_NUM = 15;

function genRandom(){ //랜덤 숫자를 생성하는 함수
    const number = Math.floor(Math.random() * IMG_NUM);
    //math.floor 통해서 소수점을 지워버림
    return number;
}

function init(){
    const randnum = genRandom();

}
init();