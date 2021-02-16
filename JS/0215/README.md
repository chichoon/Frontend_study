# 2월 15일 (월요일) JS 챌린지 07

## 3.4
- 함수 제작 순서
    1. **loadToDos** : local에 저장된 todo 불러오기
    2. **handleToDos** : todo 입력폼에 값을 입력하면 실행되는 이벤트 함수
        - 실질적인 역할 : Default로 실행되는 event를 실행되지 않게 막고, 입력받은 값을 밑의 paintToDo에 넘겨줌
    3. **paintToDo** : 입력 폼에서 입력받은 값을 list화 하여 화면에 show하는 함수
    4. **saveToDos** : todo 항목들을 로컬 스토리지에 저장
- JS에서 html 요소 건드리기
    - **document.querySelector** : html에 이미 존재하는 요소를 가지고 옴
    - **document.createElement** : html에 새로운 요소를 추가함
- ol과 ul, li
    - **ol**은 순서가 있는 리스트 (ordered list)
    - **ul**은 순서가 없는 리스트 (unordered list)
    - **li**는 리스트 내의 항목들
- span과 div
    - 둘 다 다른 요소를 안에 담는 container 역할을 한다
    - **span**은 줄 단위로 동작하고 (같은 줄 내에 요소가 담기는 방식)
    - **div** 는 박스 단위로 동작 (특정 크기의 네모칸 안에 요소가 담기는 방식)
- **요소.appendChild** 는 요소 안에 하위 요소 (자녀 요소) 를 추가한다
    - 예를 들면 li.appendChild는 list의 항목으로 보여질 자녀 요소들을 추가
    - ul.appendChild(li)는 리스트 내의 항목으로 li들을 추가
    - 컨테이너 안에 물건을 담는다고 생각하면 된다
   
## 3.5
- 자바스크립트에서 LocalStorage에 접근할 땐, 값을 모두 string으로 저장하기 때문에 (boolean, int 등등... 다 string이 됨) Object 등을 저장하고 뺄 수 없다
- 따라서 **JSON.stringify**, **JSON.parse** 등의 tool을 써야 됨
- **array.forEach(함수)** 는 array 내의 모든 원소에 대하여 함수를 수행한다
    - array 내의 원소들을 각각 함수의 argument로 받아옴