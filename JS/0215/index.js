const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//todoform (입력창), todoinput (입력값), todolist (리스트) 불러오기
//다른 함수의 변수명과 겹치지 않도록 이름 설정 잘 해주기

const TODOS_LS = 'toDos'
//todo 항목들이 저장된 storage 이름

function paintToDo(text){

}


function handleSubmit(event){ //todo form에 항목 입력하면 저장하는 함수
    event.preventDefault(); //argument로 event 불러오는 이유 :
    //Default 동작을 막기 위해
    const currentValue = toDoInput.value;
    //현재 입력창에 적힌 값을 current value 변수에 넣음
    paintToDo(currentValue);
    //입력받은 값을 다루는 함수
}

function loadToDos(){ //로컬에서 todo 불러와 보여주는 함수
    const toDos = localStorage.getItem(TODOS_LS);
    //local에 저장된 todo 항목들을 불러오기
    if(toDos !== null){
        //form과 toDolist는 항상 보여지기 때문에,
        //todo list에 값이 없어도 진행할 동작이 없다
        //따라서 todo list에 값이 있을 때만 그에 따른 동작 수행

    }
}

function init(){
    loadToDos();
    //로컬 스토리지에서 todo list 불러오기
    toDoForm.addEventListener("submit", handleSubmit);
    //todo 입력창에 값 입력했을 때 수행할 event 정의
}

init();