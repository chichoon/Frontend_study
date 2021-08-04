const title = document.getElementById("title");
//document도 console과 같은 Object이며, 함수가 내장되어있음
//getElementById를 이용해서 html 파일의 id=title을 불러옴

console.log(title);
//VScode extension 통해서 run code 하면 document를 undefined로 취급함
//아마 node.js 파일로 인식하는지?
//출력결과 : <h1 id="title">this works!</h1>

console.error("dumb");
//html 파일을 열어서 F12로 콘솔창을 보면 error로 dumb가 뜸

title.innerHTML = "Hello! from JS";
//Javascript에서 html 내의 요소를 변경할 수 있다
//html 파일을 열어보면 Hello! from JS로 변경되어 있음

console.dir(title);
//title이라는 객체의 속성을 전부 콘솔창에 나열함
//접혀있는 것을 열면 아주.. 길다

title.style.color = "fuchsia";
//Javascript에서 html 내의 요소를 변경했다
//(Title을 객체화한 다음 style - color를 fuchsia색으로)

document.title = "hahahaha";
//html 파일의 title까지 손댈 수 있다
//babo 로 지정된 title이 hahahaha로 변경됨

const title1 = document.querySelector("#title");
//노드의 첫번째 자식을 반환하는 함수
//document 내의 모든 자식들을 뒤져서 title을 찾는다는 의미
//앞에 #를 붙이면 id를 찾고, .을 붙이면 class를 찾음

console.dir(title1);
//결과는 getElementById 때와 같다