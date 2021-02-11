const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
//css에서 설정한 class명

function handleClick(){
    const currentClass = title.className;
    console.log(currentClass);
    //title이라는 id를 가지고 있는 객체의 현재 classname
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
        //현재 title 객체의 class명이 clicked_class와 같지 않을 때
        //title 객체의 class명을 clicked_class로 변경
    } else {
        title.className = ""
        //현재 title 객체의 class명이 clicked_class와 같을 때
        //title 객체의 class명을 지워버림
    }
    //이런 방식으로 색 조정은 css 파일 내에서 하고
    //JS에서는 css의 클래스명을 html에 적용하는 식으로 작업을 분리할 수 있음
    //하지만 이 방법으로는 클래스가 CLICKED_CLASS가 아닌 모든 항목들에 대해 변경하고 있으므로
}

function handleClick2(){
    const hasClass = title.classList.contains(CLICKED_CLASS)
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
        //현재 title 객체의 class list에 clicked_class가 존재하지 않을 때
        //title 객체의 class list에 clicked_class를 추가  
    } else {
        title.classList.remove(CLICKED_CLASS);
        //현재 title 객체의 class list에 clicked_class가 존재할 때
        //title 객체의 class list에 clicked_class를 삭제  
    }
    //해당 방식으로 원래 있던 class도 살리고 새로운 class도 추가/제거 할 수 있다
}

function handleClick3(){
    title.classList.toggle(CLICKED_CLASS);
    //위의 handleClick2의 함수 내부 내용을 수행
    //(classlist에 clicked_class가 존재하면 제거, 존재하지 않으면 추가)
}

function init(){
    title.addEventListener("click", handleClick3);
}
init();