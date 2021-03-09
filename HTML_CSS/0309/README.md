# 3월 9일 (화요일) HTML/CSS/JS 08

## States

- 현재 요소의 상태
  - **active** : 버튼을 누르는 등의 행동으로 현재 요소가 활성화되었을 때
    - 버튼이 눌렸을 때 색깔 등을 active로 변경할 수 있다
  - **hover** : 마우스 커서가 요소의 위에 올라가 있을 때
  - **focus** : 키보드로 선택되었을 때 (tab키 등으로 요소를 선택했을 때)
  - **visited** : (**링크에만 적용**) 이미 방문했었던 링크일 때 (파란색에서 보라색으로 변하는 그거)
  - **focus-within** : (**부모요소에만 적용**) 자식 요소중 하나가 focus 상태일 때
- State는 다른 Selector들과 혼합하여 사용할 수 있음
  - 예시: **form:hover input**{} 은 form이 hover 상태일 때 안에 있는 input들에 적용
  - **form:hover input:focus**{} 은 form이 hover 상태이면서 안에 있는 input이 focus 상태일 때 적용

## Pseudo - element

- 실제로 존재하는 element는 아니지만 스타일링이 가능한 element
  - **input요소::placeholder** : input 내의 placeholder의 색만 바꾸고 싶을 때 (input의 색은 바뀌지 않음)
  - **요소::selection** : 드래그를 해서 글자 등의 요소를 선택할 때 적용됨
  - **요소::first-letter** : 요소의 첫 번째 글자에만 속성 적용
  - **요소::first-line** : 요소의 첫 번째 줄에만 속성 적용
- 훨씬 많은 Pseudo element들이 있기 때문에 적당히 찾아가면서 사용하면 좋다

## Colors

- 이미 css에 정의된 컬러명을 입력하여 (예시: magenta, teal 등) 사용할 수 있지만 다른 방식도 있음

1. **Hexadecimal Code** (#FFFFFF 등)
2. **RGB 값** (rgb(255, 255, 255))
3. **RGBA 값** (rgba(255, 255, 255, 0.5)) - a는 투명도를 나타냄

## Variables

- CSS도 프로그래밍 언어들처럼 변수를 적용할 수 있도록 해줌
- 예를 들어 색 설정 등은 두고두고 또 쓰일 때가 있기 때문에 (일일히 복붙해서 집어넣기엔 나중에 요소가 많아지면 골때림) :root에 변수를 넣어놓고 가끔 가져와서 쓴다
- 값을 저장할 땐 변수명: 변수값 을 :root{} 안에 넣음
  - 변수명은 무조건 --로 시작한다, 변수명엔 띄어쓰기 대신 -를 넣는다
  - 변수값에 또다른 변수를 넣을 수도 있음
- 값을 사용할 땐 var(변수명) 으로 불러옴

# Transition

- 어떤 상태에서 다른 상태로의 변화를 보여주는 효과
- (다른 상태로 변화할 때 애니메이션을 넣어주는 것)
- transition을 추가할 땐 상태 (state) 가 없는 쪽에 속성을 붙여야 함
  - a:hover가 아닌 a에 속성으로 넣어줘야 함!
- transition 추가하는 법 : **transition: 변화시킬 속성 변화하는 시간**
  - 예시) transition: background-color 1s
- 여러 속성 변화를 한번에 줄 수도 있다
  - 예시) transition: background-color 1s color 5s
- Transition은 **state를 기준**으로 변한다 (hover, active, ... 등)
  - state로 지정한 속성이 없으면 변화를 줄 수 없음
  - 예를 들어 state selector 내에 font-size가 없다면 font-size에 변화를 줄 수 없다는 것
- 또한 Transition은 **state selector 내에 위치하면 안됨**
  - state selector가 아닌 기존 selector에 위치해야 함
  - index:hover가 아닌 index에

## 팁

- default로 지정되어 있던 스타일을 임의로 하나라도 바꾸면 해당 스타일이 전부 날아감
  - 예: 버튼 클릭시의 배경색을 변경하면 버튼 클릭시 설정되어있던 border나 border-radius 등 설정된 default값이 전부 날아감
