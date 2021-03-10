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
