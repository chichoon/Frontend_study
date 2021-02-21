# 2월 20일 (토요일) JS 챌린지 11

## 3.7 Image Background
- **Math.random()** : 0에서 1까지의 랜덤난수를 반환
- **Math.floor()** : 내림 (3.1, 3.5, 3.6 -> 3)
- **Math.ceil()** : 올림 (3.1, 3.5, 3.6 -> 4)

## 3.8 Getting the Weather part One
- **navigator** object를 이용하면 다양한 api를 이용할 수 있음
- **navigator.geolocation**은 장소 (좌표) 와 관련된 object
    - **getCurrentPosition(함수1, 함수2)** 함수를 이용하여 현재 위치의 좌표를 불러올 수 있다
    - 함수1은 좌표 불러오기에 성공했을 경우 실행됨
    - 함수2는 좌표 불러오기에 실패했을 경우 실행됨
    ![좌표 불러오기 성공](./JSgeolocation.png)
    - 좌표 불러오기 성공하여 리턴값을 console.log 했을 경우, 위와 같은 object가 출력된다
    - object에는 정확도나 시간, 위도와 경도가 표시됨
    ![좌표 로컬에 저장](./JSgeolocationSavedLocal.png)
    - object이므로, 내부 요소인 latitude나 longitude만을 빼올 수도 있음 (당연히)