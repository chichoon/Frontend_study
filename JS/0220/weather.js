const COORDS = 'coords';

function saveCoords(coordsObj){ //localStorage에 좌표 object를 저장하는 함수
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    //object를 json.stringify를 이용하여 string화 시킨 후 저장
}

function handleGeoSuccess(position){ //좌표를 가져오는데 성공했을 경우 실행되는 함수
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        //객체 (Object)에서 키 이름과 키값 변수명이 같을 땐
        //그냥 이렇게 해줘도 latitude : latitude와 같은 결과를 갖는다
    };
    //위도와 경도를 객체 내에 저장
    saveCoords(coordsObj);
    //해당 객체를 localStorage에 저장하는 함수
}

function handleGeoError(){
    console.log('failed to get position');
}

function askForCoords(){ //api를 이용해서 현재 위치를 받아옴
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    //함수 두 개를 인자로 받는데, 첫 번째는 좌표 불러오기에 성공했을 경우,
    //두 번째는 좌표 불러오기에 실패했을 경우
}

function loadCoords(){ //현재 위치 좌표를 불러오는 함수
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
        //현재 위치 좌표가 저장되어 있지 않다면 새로 불러오기
    } else {
        getWeather();
        //현재 위치 좌표를 이용해서 날씨를 불러오기
    }
}

function init(){
    loadCoords();

}

init();