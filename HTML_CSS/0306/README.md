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
- CSS에서 가리키는 방법 : #ID {}

## Border

- Box의 경계면
- border의 두께를 지정하고, 스타일과 색을 지정한다
- border: 2px solid black
- inline 요소에도 border은 적용될 수 있다
- **border-style** 이용해서 스타일을 바꿔줄 수도 있다

## Classes

- 요소를 구분하는 또 다른 방법
- ID와 비슷하지만, 여러 요소에 중복된 class를 부여할 수 있음
  - 따라서 ID에 따른 style에 속성값을 복붙할 필요가 없음
- 요소를 class로 묶어서 class마다 다른 style을 부여할 수 있다
- CSS에서 가리키는 방법 : .CLASS{}
