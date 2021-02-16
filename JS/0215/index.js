const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
//todoform (입력창), todoinput (입력값), todolist (리스트) 불러오기
//다른 함수의 변수명과 겹치지 않도록 이름 설정 잘 해주기

const TODOS_LS = 'toDos'
//todo 항목들이 저장된 storage 이름
let toDos = [];
//todo 항목들은 개수가 많기 때문에, 한번에 저장하려면 array 형식을 이용해야 좋다
//todo를 입력할 때마다 해당 배열에 추가되도록 하자
let newID = 0;
//전역변수로 newID를 선언하면, Initialize 함수 실행 시에 기존에 저장된 값들을
//화면상에 paint하는 과정에서 index가 늘어나기 때문에,
//이 뒤에 무엇을 추가해도 겹칠 일이 없음

function deleteToDo(event){ //버튼을 누르면 해당 todo가 사라지게 하는 함수
    const btn = event.target;
    //클릭해준 버튼 받아오기
    const li = btn.parentNode;
    //해당 버튼의 부모가 되는 리스트 항목 받아오기
    toDoList.removeChild(li);
    //해당 항목 리스트 내에서 삭제하기
    const cleanToDos = toDos.filter(function(toDo){
        //todo array에서 값을 필터링 할 필터를 정의
        //filter는 array 내의 object들을 돌며 filterFunc에서 정의된 조건을
        //만족하는 요소를 return 함
        return toDo.id !== parseInt(li.id);
        //특정 id (클릭한 버튼에 해당하는 li의 id) 가진 object를 제외한
        //나머지 object들을 array에 출력하는 필터링
        //이때 li.id는 string이기 때문에 parseInt를 이용해서 integer로 변환
    });
    toDos = cleanToDos;
    //필터링된 array를 전역array인 todos에 저장
    //이때 const로 선언하면 값을 변경할 수 없으므로 todos는 let으로 선언
    saveToDos();
    //변경된 todo array를 저장
}

function saveToDos(){ //로컬에 할일리스트를 저장하는 함수
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //local storage에 todos array를 저장
    //array채로 저장하는 이유는 여러개의 항목을 한번에 저장하기 위함
    //JSON.stringify는 Javascript object를 string으로 변환해줌
    //자바스크립트는 로컬 스토리지에 값을 저장할 때 string으로 맘대로 변환하기 때문
}

function paintToDo(text){ //입력받은 todo 요소들을 list로 보여주기 위한 함수
    const li = document.createElement("li");
    //querySelector은 이미 존재하는 요소를 class명 등을 이용해서 가져왔다면,
    //createElement는 생성할 요소 종류를 적어서 Javascript 측에서 생성한다
    //위의 예시는 li 속성의 요소를 추가하기 위함 (list 내의 내용물)
    const delBtn = document.createElement("button");
    //button 속성의 요소 추가 (리스트 항목 삭제용)
    const span = document.createElement("span");
    //span 속성의 요소 추가
    //span : 라인 (줄) 안에 값을 담는 container (div는 블록 container)
    delBtn.innerText = "❌";
    //button 위의 text 변경
    delBtn.addEventListener("click", deleteToDo);
    //버튼을 클릭할 때 deleteTodo 함수가 실행되도록 이벤트 리스너 설정
    span.innerText = text;
    //span에 적힌 text 변경
    li.appendChild(span);
    li.appendChild(delBtn);
    //list의 자녀 요소로 span과 delbtn을 추가
    //list 항목마다 span과 delbtn이 나란히 표시되도록 집어넣어줌
    //둘의 순서를 바꾸면 버튼이 먼저 나오고 뒤에 text가 나온다
    li.id = newID;
    //list 항목에 ID를 부여 (삭제하기 쉽도록)
    toDoList.appendChild(li);
    //toDoList에 자녀 요소로 li 추가
    //리스트 내에 항목을 추가
    const toDoObj = {
        //todo Obj는 todo text와 id를 담은 object
        //각 obj마다 form에서 입력받은 text와 id가 저장됨
        text : text,
        id : newID    
        //array에 추가할 obj의 id를 정의
        //id는 local에 값을 저장할 때 도움을 주도록 함
        //함수 및 코드 내에서 변수들은 함수 위쪽에 적고 다른 행동들은 밑에 적는게 좋다
    }
    toDos.push(toDoObj);
    //todo array에 todo object를 하나 넣어줌
    saveToDos();
    //todo array에 값을 집어넣은 뒤에 savetodos를 호출함으로써
    //방금 집어넣은 값을 local에 저장
    newID++;
    //ID index가 겹치지 않게 증가시킴
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
        const parsedToDos = JSON.parse(loadedtoDos);
        //local에 저장하기 위해 string으로 저장했던 JS Object들을 다시 object로 복원
        parsedToDos.forEach(function(toDo){
            //parsedToDos라는 array 내의 각 원소를 argument로 하여 함수를 한번씩 전부 실행함
            //여기서 toDo는 parsedToDos 내에 담긴 각각의 원소 (object)임
            //따라서 이 함수는 array 내의 모든 원소를 하나씩 받아와 
            //argument로 사용하여 한번씩 실행됨
            paintToDo(toDo.text);
            //parsedToDos 내의 todo object들에서 text를 가져와 paint 함수를 실행시킨다
        });
    }
}

function init(){
    loadToDos();
    //로컬 스토리지에서 todo list 불러오기
    toDoForm.addEventListener("submit", handleSubmit);
    //todo 입력창에 값 입력했을 때 수행할 event 정의
}

init();