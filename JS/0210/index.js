console.log(console);
//log로 console를 찍어보면 function 객체들로 이루어진 object임을 알 수 있음

function helloBot(){ //함수 정의
    console.log("hello!");
    //함수 내용 채우기
}

helloBot(); //함수 불러오기

function helloBotWithArg(argument){ //인자 받아오기
    console.log("hello,", argument, "!"); //인자와 함께 print 출력
}
helloBotWithArg("Chichoon") //chichoon이라는 string 인자 부여
//결과물 : hello, Chichoon!
//console.log는 comma 사이사이에 자동 띄어쓰기가 되는듯