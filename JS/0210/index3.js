const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized..");
}

window.addEventListener("resize", handleResize);
//이벤트를 발생시키기 위한 Listener
//앞에는 이벤트 타입 (resize), 뒤에는 이벤트 발생시 작동시킬 함수 (handleResize)
//이때 handleResize() 가 아닌 handleResize임에 주의
//handleResize() 로 적으면 handleResize가 (resize 되지도 않았는데) 자동적으로 바로 호출됨

function handleEvent(event){
    console.log(event);
}
//이벤트를 다루는 함수를 만들 때마다 JS 측에서 자동적으로
//함수를 객체에 Argument로 넣어줌

window.addEventListener("resize", handleEvent);
//실행시키면 창이 resize될 때마다 event 객체가 호출되어 log에 표시됨
//handleEvent(event)는 deprecated이므로 사용하지 말자

function handleClick(){
    title.style.color = "red";
    //타이틀을 클릭하면 색이 red로 변경
}

window.addEventListener("click", handleClick);
//click 타입의 이벤트가 일어나면 handleClick를 호출