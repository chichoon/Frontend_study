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
- transition을 추가할 땐 **상태 (state) 가 없는 쪽**에 속성을 붙여야 함
  - a:hover가 아닌 a에 속성으로 넣어줘야 함!
- transition 추가하는 법 : **transition: 변화시킬 속성 변화하는 시간**
  - 예시) transition: background-color 1s
- 여러 속성 변화를 한번에 줄 수도 있다
  - 예시) transition: background-color 1s, color 5s
- Transition은 **state를 기준**으로 변한다 (hover, active, ... 등)
  - state로 지정한 속성이 없으면 변화를 줄 수 없음
  - 예를 들어 state selector 내에 font-size가 없다면 font-size에 변화를 줄 수 없다는 것
- 또한 Transition은 **state selector 내에 위치하면 안됨**
  - state selector가 아닌 기존 selector에 위치해야 함
  - index:hover가 아닌 index에
- 모든 transition의 지속시간을 바꾸려면 **all 1s** 이런식으로 all을 사용
- ease-in, ease-out, ease-in-out은 애니메이션이 어떻게 변화할지 알려주는 것
  - **linear**은 직선으로 변화함 (시간당 변화하는 양 같음)
  - **ease-in**은 처음에 느리게 변화했다가 급격해짐
  - **ease-out**은 처음에 빠르게 변화했다가 느려짐
  - **ease-in-out**은 처음에 느리게 변화했다가, 빨라졌다가 다시 느려짐
  - 이런 것들은 변화하는 양의 프리셋이고, 자기만의 transition 설정은 시간 + cubic-bezier을 통해 곡선을 만들 수 있다
    - cubic-beizer(0, 0, 0, 0) (값은 0부터 1 사이)
    - ease-in, ease-out, ease-in-out이 제일 많이 쓰이긴함

## Transformations

- 한 요소를 변형시키는 데 쓰이는 것
- 애니메이션이 보여진다기보단 이미지 등을 변형하는 속성
  - 예를 들면 rotateY, rotateX 등은 3D 축에서 이미지를 변형시키기도 함
- 이러한 변형은 형제 요소들 (box, inline 등)에 영향을 미치지 않음 (형제 요소들은 제자리에 가만히 있음)
  - margin, padding과 아무런 관련이 없음
  - 따라서 다른 요소들과 독립적으로 움직임, box 차원에서 움직이지 않음
- transform도 다른 속성과 마찬가지로 transition 적용 가능함
- 요즘 브라우저 성능이 너무 좋아져서 가능하게 된 것들

## Animations

- transition은 한 state부터 다른 state로 변화하는 것을 animate하지만, 이것은 state의 변화 시에만 볼 수 있다
- Animation은 state의 변화에 구애받지 않음
- 애니메이션 지정하는 법 : **@keyframes 애니메이션명**
  1. from to 이용하기: from {이전모습} to {다음모습}
  2. from to의 2단계 말고 여러 단계로 나누기:
     - 0%, 20%, 50%, 100%등 진행정도에 따라서 분리
     - 진행정도는 원하는 만큼 분리할 수 있음
     - from to는 0% 100%와 같은 역할을 함
- 애니메이션 불러오는 법 : **animation: 애니메이션명 지속시간 변화량** (transition과 비슷)
  - 무한정으로 변화하게 하고 싶으면 맨 마지막에 infinite
- 굳이 변화속성을 transform으로 하지 않아도 되지만, 권장사항임
  - 다른 속성 중에 animation이 잘 안 먹히는 속성들이 있기 때문

## 팁

- default로 지정되어 있던 스타일을 임의로 하나라도 바꾸면 해당 스타일이 전부 날아감
  - 예: 버튼 클릭시의 배경색을 변경하면 버튼 클릭시 설정되어있던 border나 border-radius 등 설정된 default값이 전부 날아감
