const title = document.querySelector("#title");
//index2.html에서 title이라는 id를 가진 객체를 가져옴

const BASE_COLOR = "rgb(52, 73, 94)";
//기본으로 설정해줄 색

const OTHER_COLOR = "rgb(185, 66, 179)";

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);    
    //누군가 화면을 클릭했을 경우 함수 작동
    //실행시키면 rgb(52, 73, 94) 처럼 title color의 rgb값이 log로 출력

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        //현재 title 색이 base color일 경우 other color로 바꿔주기
    } else {
        title.style.color = BASE_COLOR;
        //현재 title 색이 other color일 경우 base color로 바꿔주기
    }
    //화면 클릭클릭하면 글자색을 계속 바꿀수 있다
}

function init(){
    title.style.color = BASE_COLOR;
    //title 객체의 색을 BASE_COLOR로 초기화
    title.addEventListener("click", handleClick);
    //title 객체에 이벤트를 부여 (click시 발생)
}

init();
//init 함수의 내용대로 프로그램 initialize