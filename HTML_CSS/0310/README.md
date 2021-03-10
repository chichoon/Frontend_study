# 3월 10일 (수요일) HTML/CSS/JS 09

## Media Queries

- CSS만을 이용해서 스크린의 사이즈를 알 수 있는 방법
- 스마트폰이나 노트북, 빔프로젝터 등 화면크기가 제각각일 때 그에 맞춰서 화면 레이아웃을 바꿀 때 사용된다
- 사용법: **@media 스타일명(조건) {Selector{속성}}**
  - 예시: **@media screen(max-width: 800px){}**
    - 화면 크기가 800px보다 작을 때 해당 속성이 발동됨
  - and를 이용해서 여러 조건을 붙일 수 있음
    - (min-width: 800px) and (max-width: 1900px)
-
