if (3 === '3') { //=== 연산자는 형변환 x
    console.log('one');
} else {
    console.log('zero');
}
//강제 형변환이 이루어지지 않기 때문에 출력 : zero

if (3 == '3') { //== 연산자는 형변환 o
    console.log('one');
} else {
    console.log('zero');
}
//강제 형변환이 이루어지기 때문에 출력 : one

if(3 >= 10 && 5 < 9){
    console.log('ok');
} else {
    console.log('nope');
}
//3 >= 10 은 거짓이고 5 < 9는 참이기 때문에
//and에선 하나라도 거짓이면 거짓 -> 출력 : nope

if(3 >= 10 || 5 < 9){
    console.log('ok');
} else {
    console.log('nope');
}
//3 >= 10은 거짓이고 5 < 9는 참이기 때문에
//or에선 하나라도 참이면 참 -> 출력 : ok

