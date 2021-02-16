const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//todoform (입력창), todoinput (입력값), todolist (리스트) 불러오기
//다른 함수의 변수명과 겹치지 않도록 이름 설정 잘 해주기

const TODOS_LS = 'toDos'
//todo 항목들이 저장된 storage 이름
const toDos = [];
//todo 항목들은 개수가 많기 때문에, 한번에 저장하려면 array 형식을 이용해야 좋다
//todo를 입력할 때마다 해당 배열에 추가되도록 하자

function paintToDo(text){ //입력받은 todo 요소들을 list로 보여주기 위한 함수
    const li = document.createElement("li");
    //querySelector은 이미 존재하는 요소를 class명 등을 이용해서 가져왔다면,
    //createElement는 생성할 요소 종류를 적어서 Javascript 측에서 생성한다
    //위의 예시는 li 속성의 요소를 추가하기 위함 (list 내의 내용물)
    const delBtn = document.createElement("button");
    //button 속성의 요소 추가 (리스트 항목 삭제용)
    delBtn.innerText = "❌";
    //button 위의 text 변경
    const span = document.createElement("span");
    //span 속성의 요소 추가
    //span : 라인 (줄) 안에 값을 담는 container (div는 블록 container)
    span.innerText = text;
    //span에 적힌 text 변경
    li.appendChild(span);
    li.appendChild(delBtn);
    //list의 자녀 요소로 span과 delbtn을 추가
    //list 항목마다 span과 delbtn이 나란히 표시되도록 집어넣어줌
    //둘의 순서를 바꾸면 버튼이 먼저 나오고 뒤에 text가 나온다
    toDoList.appendChild(li);
    //toDoList에 자녀 요소로 li 추가
    //리스트 내에 항목을 추가
    const toDoObj = {
        //todo Obj는 todo text와 id를 담은 object
        //각 obj마다 form에서 입력받은 text와 id가 저장됨
        text : text,
        id : toDos.length + 1
        //toDos.length는 현재 array의 길이로, 원소가 아무것도 없으면 0
        //요소가 추가될 때마다 length (개수)가 늘어나며, 
        //결국 obj에서 id는 리스트에 몇번째로 저장되었는가를 의미
    }
    toDos.push(toDoObj);
    //todo array에 todo object를 하나 넣어줌
}

function handleSubmit(event){ //todo form에 항목 입력하면 저장하는 함수
    event.preventDefault(); //argument로 event 불러오는 이유 :
    //Default 동작을 막기 위해
    const currentValue = toDoInput.value;
    //현재 입력창에 적힌 값을 current value 변수에 넣음
    paintToDo(currentValue);
    //입력받은 값을 다루는 함수
    toDoInput.value = "";
    //값을 입력할 때마다 form에 적힌 text가 리셋되도록 함
}

function loadToDos(){ //로컬에서 todo 불러와 보여주는 함수
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    //local에 저장된 todo 항목들을 불러오기
    if(loadedtoDos !== null){
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