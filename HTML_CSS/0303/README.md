# 3월 3일 (수요일) HTML/CSS/JS 03

## Tag Attributes

- a (anchor) 등의 태그를 쓸 땐 태그만으론 부족해서 정보를 주어야 제대로 작동하는데, 이때 자료를 넘겨주는 역할이 **attribute**
- 예시로 **a href="링크"** 에서 링크를 정보로 넘겨주는 href (hyperlink reference)가 attribute이다
- 이처럼 이미 브라우저와 약속된 attribute를 쓸 경우엔 문제 없이 약속대로 작동됨
- 사전에 정의되지 않은 attribute를 쓸 경우엔 에러는 없지만 써도 의미가 없다
- href 등 몇몇 attribute는 특정 태그에서만 동작함, 모든 태그에서 동작하는 attribute도 있음

## Tags

- 가끔 <태그></태그> 꼴로 동작하지 않고, <태그 /> 로 닫히는 태그들이 있음
- 이런 것들을 Self-Closing tag라 한다
- 대표적으로 img 태그가 있는데, 이건 내부에 들어가는 게 사진이지 텍스트가 아니라서 이렇게 됨
- (보통 태그 내부에 텍스트를 입력할 때 <태그> </태그> 꼴로 닫힌다)

## HTML rules

- HTML을 규격화하는 규칙들이 몇 종류 있음
  1. 모든 html 파일은 **!DOCTYPE html**로 시작한다
     - 이것은 텍스트 파일이 아니라 html 파일임을 브라우저에 알려주기 위함
  2. html 코드는 **html** 태그 안에 들어간다
  3. 모든 웹사이트 내부는 head와 body로 구분되어 있음
     - head는 외부적으로 보여지지 않는 setting을 해주는 역할
     - body는 실질적으로 보여지는 content 코드부분
