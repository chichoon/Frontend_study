const COORDS = 'coords';

function handleGeoSuccess(position){ //좌표를 가져오는데 성공했을 경우 실행되는 함수
    console.log(position);
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