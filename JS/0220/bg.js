const body = document.querySelector("body");

const IMG_NUM = 15;

function handleImageLoad(){
    body.appendChild(image);
}

function paintImage(imgNum){
    //난수에 대응하는 사진을 배경으로 지정하는 함수
    const image = new Image();
    image.src = `images/${imgNum}.jpg`;
    image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){ //랜덤 숫자를 생성하는 함수
    const number = Math.floor(Math.random() * IMG_NUM);
    //math.floor 통해서 소수점을 지워버림
    return number;
}

function init(){
    const randnum = genRandom();
    paintImage(randnum);
    //랜덤하게 이미지를 배경으로 지정
}
init();