const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
//.js-form은 class명, input은 form 내의 형식명

const USER_LS = "currentUser"
//local storage 위치명

function paintGreeting(text){
    greeting.innerText = `Hello, ${text} !`;
    //greeting 요소의 text를 변경하여 출력하는 함수
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    //currentUser라는 storage에서 아이템을 꺼내옴
    if(currentUser === null){ //저장된 값이 없을 때

    } else { //저장된 값이 있을 때
        paintGreeting(currentUser);
        //local storage에 저장된 값을 정의한 함수를 이용해 출력
    }
}



function init(){
    
}
init();