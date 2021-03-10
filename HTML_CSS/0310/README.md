# 3월 10일 (수요일) HTML/CSS/JS 09

## Media Queries

- CSS만을 이용해서 스크린의 사이즈를 알 수 있는 방법
- 스마트폰이나 노트북, 빔프로젝터 등 화면크기가 제각각일 때 그에 맞춰서 화면 레이아웃을 바꿀 때 사용된다
- 사용법: **@media (조건) {Selector{속성}}**
  - 예시: **@media screen and (max-width: 800px){}**
    - 화면 크기가 800px보다 작을 때 해당 속성이 발동됨
  - and를 이용해서 여러 조건을 붙일 수 있음
    - (min-width: 800px) and (max-width: 1900px)
- 별의 별 조건들을 다 붙일 수 있다
  - retina display인지 여부, 색반전중인지 여부, 화면밝기, 해상도, 흑백여부, 프린팅여부 등... (MDN을 참고하자)

## Git

- 코드 파일을 효율적으로 관리하는 방법 (변경 내역, 처음에 적은 값 등)
- **Git**은 파일의 history를 전부 기억하고 추적하며 track하게 도와준다 (Version Control System)
- Git은 파일을 binary 형태로 인식하기 때문에, 굳이 text가 아니어도 어떤 파일형식이든 사용가능하다
- **Github**는 git 내역 (변경내역, history 등)을 온라인에 저장할 수 있음
  - **Repository** 는 코드가 저장되는 장소 (특정 프로젝트의 변경내역과 히스토리가 들어감)
    - 컴퓨터 내의 프로젝트 폴더를 복붙한 느낌
  - **Commit**은 내가 해당 파일의 버전을 저장한 시점
