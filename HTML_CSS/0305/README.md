# 3월 5일 (금요일) HTML/CSS/JS 05

## CSS를 HTML에 추가하기

1. style 태그 이용해서 html 파일의 head태그 내에 박아넣기
   - style 태그 내에서는 html 문법이 아닌 css 문법이 적용된다
2. 파일 분리 후 html에서 읽어들이기
   - link href="css파일위치" 를 head에 넣으면 불러와진다
   - 추가 attribute로 rel="stylesheet"를 넣어야함 (html파일과의 관계가 stylesheet라는 의미)

- 가능하면 html과 분리하는 게 좋다
  - (다른 html 페이지와도 불러와서 호환이 쉽기 때문)

## CSS 작성하기

1. selector 작성 (어떤 태그 / id / class에 속성을 부여할 것인지)
2. 중괄호 {} 내부에 속성 작성 (폰트크기, 애니메이션 등...)

## Cascading?

- CSS의 C
- 브라우저가 CSS 코드를 읽어들일 때, 위에서부터 차례로 읽는다는 의미
- 따라서 위에 있는 코드보다 아래에 있는 코드 **(마지막에 읽힌 코드)**가 우선권을 가지며, 여러 속성이 같은 대상을 가리킬 때 아래에 있는 코드가 적용된다
- style 태그보다 CSS 파일을 불러오는 줄이 아래에 있으면 css 파일의 내용이 우선됨
- 속성이 겹치지 않는다면 다른 중괄호에 적은 특성들이 동시에 적용된다 (class나 id 등을 이용해서 여러 특성을 한번에 먹일 수도 있음)

## Blocks & Inlines

- 웹사이트는 여러 개의 Box들로 이루어져 있으며 레이아웃을 결정하는 데에 가장 큰 영향을 미침
- **div** 는 양 옆에 다른 요소들이 오지 못함 (위아래로만 가능)
  - 이러한 요소를 **block** 이라 함
    - width와 height의 영향을 받음
    - display: inline으로 inline 속성으로 바꿀 수 있음 (하지만 내용물이 없으면 width, height의 영향을 받을 수 없어 사라짐)
    - header, quote 등 대부분의 요소들은 block이다
    -
- **span** 은 양 옆에 어떠한 요소든 올 수 있음
  - 이러한 요소를 **inline**이라 함
    - width와 height의 영향을 받지 않음 (내용물의 길이에만 영향을 받음)
    - display: block으로 block 속성으로 바꿀 수 있음
    - 아주 작은 글 (span) 이나 링크, 그림 등등이 inline에 속함

## Margin

- box가 가지는 특성으로, 화면 전체 (html 태그로 표현되는) 로부터 box가 가지는 여백
- box의 경계면 (border) 로부터 바깥에 있는 공간이라고 보면 됨
- 브라우저가 자동으로 넣는 style이 있기 때문에, margin을 주지 않은 상태에서도 margin이 있는 것처럼 보이게 됨
  - h1, h2, ... 이 굵은 글씨로 표시되는 등이 브라우저가 사전에 넣는 style **(user agent stylesheet)**
- margin: 10px;
  - 값을 하나만 넣으면 상하좌우 모두 적용
- margin: 10px 15px;
  - 값을 2개 넣으면 앞 값은 위아래, 뒤 값은 좌 우로 적용
- margin: 10px 15px 20px 30px;
  - 값을 4개 넣으면 각각 위, 오른쪽, 아래쪽, 왼쪽으로 적용 (시계방향 순)
- Inline 요소들도 margin 적용 가능하지만, 좌우만 되고 상하는 안됨 (높이와 너비가 없기 때문에)

## Collapsing margins

- 요소 A와 A의 하위 요소 B의 상하 경계가 일치할 경우 두 요소의 margin이 함께 적용되는 현상
- 요소 A에 margin을 상하 10px 넣고, 요소 A 내의 요소 B에 margin을 상하 20px 넣었을 경우 요소 B의 margin이 더 크기 때문에 요소 A의 margin을 무시하고 요소 A와 요소 B의 margin을 동시에 20px 적용
- 좌우로는 적용되지 않고 (개별적으로 적용됨) 상하로만 적용됨
- 이 현상을 줄이기 위해 도입되는 개념이 padding (뒤에 계속)
