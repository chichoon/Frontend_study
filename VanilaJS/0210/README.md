# 2월 10일 (수요일) JS 챌린지 03
  
## 2.0
#### JS Function
- console.log 에서 console은 앞서 살펴본 object이고, log는 그 안의 요소의 key이다
- 이때 log는 console object 안 에 들어있는 함수 객체라고 할 수 있다
- console을 console.log로 출력하면 내부의 객체들 (함수들) 을 볼 수 있음
- 이때 console 내부의 함수들은 **Built-in 함수**
- **함수**는 어떤 걸 수행해 주는 코드 조각으로, 쓰고 싶을 때 불러올 수 있음
- **인자** (Argument) 는 함수 안에 들어가서 서로 다른 역할을 수행
  
  
## 2.1
#### MORE Functions!!!
- Backticks (``) 를 사용하면 string들을 +나 ,로 나열하지 않아도 내부에 ${argname} 을 사용해서 argument와 string을 붙일 수 있다
- Object 내부에 key : function(arg){} 형식으로 여러 개의 함수를 선언 가능하다


## 2.2
#### JS DOM Functions
- HTML과 JS를 같이 쓰면 무슨 일이 일어나나?
- JS에서도 CSS와 같이 html의 요소를 선택할 수 있다
- 이때 html 요소를 선택해서 들고올 수 있도록 도와주는 것이 **DOM**
- **DOM이란?** Document Object Module
    - JS 측에서 html 내의 요소들을 모두 가지고 와서 객체화 시킴
    - 따라서 Javascript 내에서 html 요소들을 document 객체를 통해 변경하거나 손볼 수 있게 됨


## 2.3
#### Modifying the DOM with JS
- document.getElementById 함수를 이용하여 html 내의 요소를 id를 통해 불러올 수 있다
- 예를 들어 Body 안의 id가 "title" 인 요소를 불러오면 
    - Javascript Object 건드릴 때 처럼 Object 내의 속성 (color, text, width 등) 을 바꿀 수 있다
- document 그 자체로 html 내의 요소들을 통짜로 들고오기 때문에, document.title 등으로 html의 title에 접근하는 등 html 내의 모든 것을 손 댈 수 있다


## 2.4
#### Events and event handlers
- 앞선 색변경이나 글자변경 등은 html, css에서 모두 가능함
- Javascript가 등장한 이유 : 이벤트 handling 때문
- **이벤트** : 웹사이트에서 발생하는 이런저런 일들
- 예시: window.addEventListener("resize", handleResize);
    - 해당 화면이 resize될 때마다 handleResize가 호출됨
    - 화면이 resize되지 않으면 호출되지 않음
    - handleResize()라 적으면 resize 되지도 않았는데 처음부터 호출됨에 주의!!
- 이처럼 지정한 이벤트 (resize, click, ...) 가 발생할 때마다 함수를 호출할 수 있도록 설정하는 함수가 addEventListener이다