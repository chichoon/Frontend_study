# 3월 3일 (수요일) HTML/CSS/JS 03

## Tags

- 브라우저에게 특정 동작을 수행하도록 지시하는 방법
- 그 종류가 매우매우매우 많아서 외우는건 어렵고 검색을 자주자주 하는 것을 추천 ([mdn 사이트가 좋다](https://developer.mozilla.org/ko/) - 모든 사용가능 attribute나 예시 등도 보여줌)
- 태그 내에 태그를 집어넣어도 된다
- 가끔 <태그></태그> 꼴로 동작하지 않고, <태그 /> 로 닫히는 태그들이 있음
- 이런 것들을 Self-Closing tag라 한다
- 대표적으로 img 태그가 있는데, 이건 내부에 들어가는 게 사진이지 텍스트가 아니라서 이렇게 됨
- (보통 태그 내부에 텍스트를 입력할 때 <태그> </태그> 꼴로 닫힌다)

## Tag Attributes

- a (anchor) 등의 태그를 쓸 땐 태그만으론 부족해서 정보를 주어야 제대로 작동하는데, 이때 자료를 넘겨주는 역할이 **attribute**
- 예시로 **a href="링크"** 에서 링크를 정보로 넘겨주는 href (hyperlink reference)가 attribute이다
- 이처럼 이미 브라우저와 약속된 attribute를 쓸 경우엔 문제 없이 약속대로 작동됨
- 사전에 정의되지 않은 attribute를 쓸 경우엔 에러는 없지만 써도 의미가 없다
- href 등 몇몇 attribute는 특정 태그에서만 동작함, 모든 태그에서 동작하는 attribute도 있음
- attribute는 큰따옴표로 주자

## HTML rules

- HTML을 규격화하는 규칙들이 몇 종류 있음
  1. 모든 html 파일은 **!DOCTYPE html**로 시작한다
     - 이것은 텍스트 파일이 아니라 html 파일임을 브라우저에 알려주기 위함
  2. html 코드는 **html** 태그 안에 들어간다
  3. 모든 웹사이트 내부는 head와 body로 구분되어 있음
     - head는 외부적으로 보여지지 않는 setting을 해주는 역할
     - body는 실질적으로 보여지는 content 코드부분

## Head

- **meta** 태그

  - 홈페이지에 관련된 추가적인 데이터
  - 예를 들어 meta content는 홈페이지의 설명을 입력 (검색엔진에서 띄워줌)
  - meta charset은 홈페이지의 인코딩타입을 변경 (utf-8 등)
  - property="" 는 사이트의 설정을 바꿔주는 태그
    - property = "og:image" 는 다른 곳에 해당 사이트를 공유했을 때 뜨는 미리보기 이미지
    - property = "og:title" 은 다른 곳에 해당 사이트를 공유했을 때 뜨는 제목
  - meta 태그는 self closing 태그이다

- **lang** attribute

  - 해당 홈페이지의 언어설정을 알려줌
  - 검색엔진에서 사용함

- **link** 태그
  - rel="shortcut icon" (shortcut icon으로 설정하겠다는 뜻)
  - sizes="16*16 32*32 64\*64" (이미지 사이즈 지정)
  - href="링크" (이미지 링크)

## form 태그

- 값을 사용자로부터 입력받을 때 쓰는 태그
- 내부에 input 태그와 함께 쓰임
  - **type** : input의 종류 (text, number, ...)
  - **placeholder** : input 입력창에 미리 적혀있는 값 (보통 설명)
  - **required** : 입력 안하고 submit 선택하면 경고가 나옴
  - **minlength** : 필요 최소 글자수
  - **accept** : input type가 file일 때, 받을 파일의 확장자를 지정 (".png, .pdf" 등)
- 기타 form 내부 태그들
  - **label** : input과 연결하여 사용하는 태그로, 텍스트를 누르면 연결된 input이 작동한다
    - for="아이디" 로 input 태그와 연결하며, 해당 칸에 input의 태그 id를 입력하면 됨

## Div 태그

- Division이라는 뜻
- 값들을 담는 영역, 상자같은 느낌
- **header**, **main**, **footer** 등의 태그는 div와 정확히 같은 역할을 함
  - 하지만 div만을 잔뜩 쓰고 id로 구분하는 것보다 header와 같이 태그를 다양하게 써주면 조금 더 코드가 명확해짐 (해당 텍스트가 무슨 부분인지 알기 쉬워짐)

## Tag ID

- 어떤 태그에나 넣을 수 있는 attribute로, 같은 이름의 태그를 구분하기 위함
- 한 요소당 **하나의 id**만 넣을 수 있음 (여러개 넣어도 에러는 안 나지만 동작도 안함)
- 또한 id는 **고유한 값**이어야 함
- CSS가 id를 이용해서 (또는 class) 해당 요소의 색상을 변경하기 때문에, id는 고유해야 함
- body에마저도 id를 부여할 수 있다

## Semantic HTML

- 문서를 보기만 해도 그 의미를 짐작할 수 있는 것을 Semantic이라 함
- 따라서 다른 작업자가 딱 봐도 document나 code를 명확하게 알아볼 수 있도록 Semantic tag를 이용하여 짜는 것이 좋습니다
- 예시로 **header**, **main**, **footer** 는 div와 정확히 같은 역할을 함
  - 그래도 이러한 태그를 사용해주면 코드만 봐도 해당 부분이 어떠한 역할을 해주는 지 알기 쉽기 때문에 **Semantic Tag**에 속한다
- 반대로 **div**, **span** 은 **non-semantic tag** 에 속한다
  - 태그에 딱히 추가적인 의미가 없는 경우

### _번외 : 여러 가지 태그들 (둘러보기)_

- **figcaption** : 이미지 설명을 위한 태그
- **p** : paragraph를 구분하는 태그
- **pre** : pre-formatted text
- **abbr** : 약어를 만들고, 마우스를 약어 위에 올리면 title attribute에 작성해준 설명이 나옴
- **code** : 폰트 변경
- **cite** : italic
- **mark** : 형광펜으로 칠한 것마냥 배경색이 들어감
- **strong** : 굵게
- **sub** : 글자를 밑에
- **sup** : 글자를 위에
- **audio** , **video** : 오디오와 비디오 추가
