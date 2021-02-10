const title = document.getElementById("title");
//document도 console과 같은 Object이며, 함수가 내장되어있음
//getElementById를 이용해서 html 파일의 id=title을 불러옴

console.log(title);
//VScode extension 통해서 run code 하면 document를 undefined로 취급함
//아마 node.js 파일로 인식하는지?
//출력결과 : <h1 id="title">this works!</h1>

console.error("dumb");
//html 파일을 열어서 F12로 콘솔창을 보면 error로 dumb가 뜸

title.innerHTML = "Hello! from JS"
//Javascript에서 html 내의 요소를 변경할 수 있다
//html 파일을 열어보면 Hello! from JS로 변경되어 있음