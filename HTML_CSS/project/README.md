# 3월 10일 ~ 14일 HTML/CSS/JS

#### index_html

- 첫 번째 페이지는 **index.html**
  - 대부분의 웹 서버는 디폴트로 index.html을 먼저 보여줌

#### 단축키

1. html 파일 처음 생성할 때 **첫 줄에 ! 치고 엔터**만 누르면 모든 html, head, body 설정을 알아서 해줌
2. div class="name"은 div.name 하면 자동완성
3. div id="id"는 div#id하면 자동완성
4. 한 줄 작성후 ctrl + / 하면 자동 주석처리

#### 클래스명 규칙 (BEM)

- **Block\_\_Element--Modifier** 규칙
- CSS나 html을 쓸 때 클래스명이나 id 등의 요소명을 다른 사람이 보더라도 알아보기 쉽게 해주는 Convention
- 부모요소명\_\_요소종류--속성
  - 예시: btn btn--big btn--orange (자식요소: btn\_\_price, btn\_\_text)
  - **btn--big**은 css상에서 버튼 크기를 크게 만들어줌
  - **btn--orange**는 css상에서 버튼색을 오렌지색으로 만들어줌
  - **btn\_\_price**는 btn의 자식요소 중 price 내용을 담았음을 알 수 있음
  - **btn\_\_text**는 btn의 자식요소 중 text를 담고 있음을 알 수 있음
- 이런 식으로 이름을 지어주면 굳이 html과 css 사이를 왔다갔다할 필요 없이 직관적으로 요소를 이해할 수 있음
- 길이가 너무 길어진다고 찝찝해하지 말자 (직관성이 중요하기 때문에 BEM 따르는 것을 추천!)

#### Font Awesome

- **svg**: 이미지형식이 아니라 좌표형식이라 이미지를 늘리건 줄이건 화질이 깨지지 않는다
- [HeroIcons](https://heroicons.dev/)는 아이콘 이미지를 많이 담고 있다
  - 들어가서 원하는 아이콘 선택하면 svg 좌표값들이 복사되므로, 붙여넣기하면 svg 태그로 사용가능하다
- [FontAwesome](https://fontawesome.com/) 또한 온갖 아이콘들을 다 갖고 있음 (무료로 사용가능한 아이콘과 유료 아이콘이 따로 있음)
  ![icon_upload](readme_images/1.png)
  - 마찬가지로 들어가서 원하는 아이콘 선택 후 코드 복사하여 원하는 위치에 붙여넣으면 이미지가 나온다 (불러온 모습)
  - 태그의 i는 icon의 i임

#### Font

- **font-family** 속성은 폰트 뭉탱이
  - 폰트명1, 폰트명2, 폰트명3, ... , 폰트명n; 이라는 구성
  - 만약 폰트명1이 시스템에 없을 경우 폰트명2를 적용, 폰트명2도 없으면 폰트명3을 적용... 함
- 폰트 구할 때 : [Google Fonts](https://fonts.google.com/)
  - select this style -> **<link\>** 소스를 긁어서 html에 추가하거나, **@import** 소스를 긁어서 css에 추가할 수 있음 (css로 추가하는 것을 추천)
  - 그리고 하단의 **CSS rules to specify families** 부분 font-family 코드를 복사하여 font-family 속성을 부여하면 됨
  - 여러 옵션을 선택할 수 있는데 (light, bold 등..) 많이 선택할수록 불러올 때 오래걸릴 수 있음
