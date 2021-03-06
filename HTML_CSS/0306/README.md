# 3월 6일 (토요일) HTML/CSS/JS 06

## Paddings

- 요소와 하위 요소의 상하 경계가 같을 경우 생기는 Collapsing Margins 문제를 해결할 수 있음
- **Margin**은 box의 경계로부터 **바깥**에 있는 공간
- **Padding**은 box의 경계로부터 **안쪽**에 있는 공간
- 따라서 Padding을 주면 box와 내부 요소들 사이에 공간이 생긴다
- (Margin은 box와 상위 요소 사이에 공간이 생겼음)
- 순서는 margin과 동일
- inline 요소에도 적용될 수 있음

## ID

- 같은 태그의 요소들을 구분하기 위한 개별적인 이름
- 중복되는 ID는 사용 불가함, 모두 다른 이름
- 한 요소에 여러 ID를 부여할 수는 없음
- **CSS**에서 가리키는 방법 : #ID {}

## Border

- Box의 경계면
- border의 두께를 지정하고, 스타일과 색을 지정한다
- border: 2px solid black
- inline 요소에도 border은 적용될 수 있다
- **border-style** 이용해서 스타일을 바꿔줄 수도 있다
- **border-radius** 이용해서 모서리를 둥글릴 수도 있음

## Classes

- 요소를 구분하는 또 다른 방법
- ID와 비슷하지만, 여러 요소에 중복된 class를 부여할 수 있음
  - 따라서 ID에 따른 style에 속성값을 복붙할 필요가 없음
- 요소를 class로 묶어서 class마다 다른 style을 부여할 수 있다
- 한 요소에 여러 class를 부여할 수도 있다
- **CSS**에서 가리키는 방법 : .CLASS{}

## Inline block

- display: inline 속성으로 block을 inline으로 바꿀 수 있지만, 안에 내용물이 없으면 사라지기 때문에 구리다
  - (width, height를 정해줄 수 없고 내용물의 크기에 따라 결정되기 때문에)
- **display: inline-block** 속성은 inline과 block의 속성을 둘 다 가진 것으로, 옆에 다른 요소가 위치할 수 있으면서 margin이 제대로 작동하고, width와 height를 가질 수 있다
  - 하지만 굉장히 오래된 속성이고, 기본 특성 자체가 영 별로임 (제멋대로 요소 사이에 공간을 주는 등)
  - 또한 크기가 유동적이지 않아 (화면 크기에 따라 변화하지 않음) margin을 하나하나 계산해서 줘야하는 등 번거로움
  - 이렇게 계산해서 넣은 margin은 브라우저 동작 화면 크기에 따라 형식이 무너질 가능성이 있어 정말 별로다 (Responsive Design을 지원하지 않는다는 뜻)

## Flexbox

- Flexbox는 박스를 화면 어디에나 배치할 수 있어 유동적이고 유연해 활용 가능성이 무궁무진함
- 하지만 규칙이 3개 있다

  1. 요소를 자유롭게 움직이고 싶으면 해당 요소에 flexbox임을 명시하는것이 아닌, **해당 요소의 부모 요소 (상위 요소)**에 알려주어야 함

  - 예를 들어 div의 부모 요소가 body이면, 부모 요소인 body를 flex로 만들어야 함

  2. **main axis** 는 가로축 (주축)

     - **justify-content** 속성은 자식 요소들의 위치를 조정할 수 있다 (가운데정렬, 오른쪽정렬, 빈공간 균등 배열 등)
     - 화면 내 요소들에 대하여 margin을 균등하게 주는 등의 과정을 알아서 해주는 좋은 속성
     - 해당 속성은 기본적으로 좌우로 적용된다 (main axis에 적용됨)

  3. **cross axis**는 세로축 (교차축)
     - **align-items** 속성은 justify-content와 비슷하게 자식 요소들의 위치를 조정해준다
     - 해당 속성은 기본적으로 상하로 적용된다 (cross axis에 적용됨)

  - 주축과 교차축은 나중에 **flex-direction** 속성을 통해 바꿀 수 있음
    - default는 row로, column으로 조정해줄 시 주축과 교차축이 뒤바뀐다

## vh

- Viewpoint height
- px와 비슷하게 크기 조절시에 사용됨
- 현재 화면 크기를 100으로 하여 퍼센티지로 표현
