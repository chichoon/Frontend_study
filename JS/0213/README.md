# 2월 13일 (토요일) JS 챌린지 06
- 설연휴때문에 못할까봐 미리 진도뺌

## 3.2
#### Saving user name
- **document.querySelector**은 입력한 항목명에 해당하는 첫 번째 요소를 가지고 옴
- **document.querySelectorAll**은 입력한 항목명에 해당하는 모든 요소를 가지고 옴
- **local storage**는 자바스크립트에서 만들어진 작은 정보를 컴퓨터 내에 저장하는 방법이다
    - **localStorage.setItem(item)** 으로 로컬 스토리지에 요소 저장
    - **localStorage.getItem(스토리지명))** 으로 로컬 스토리이제어 요소 불러오기
- **event.preventDefault()** 메소드를 이용해서 이벤트의 default execution 실행을 막을 수 있다 (해당 이벤트 발생 시에 기본적으로 일어나는 일을 막을 수 있음)

#### 복잡한 querySelector
- document.querySelector(`상위속성 하위속성 하위속성2... 하위속성n[값="값"]`);
    - 예시
    - document.querySelector(`select option[value=${userCountry}]`);
    - 여기서 **option**은 HTML 내에서 **select**의 하위 항목
    - **option** 내의 value=userCountry 인 값을 검색해서 return
    - querySelector 내의 내용은 string 형식으로 들어가기 때문에 `` 과 ${} 를 이용해서 변수값을 넣어줌