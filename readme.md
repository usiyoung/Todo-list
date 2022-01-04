# 할 일 기록
🌘 Halloween ver.

<img src="mdImg/screen1.png">

[DEMO](https://angry-swanson-1161ad.netlify.app)

## Tech
`html` `css` `javascript`

## learned
### 1. 웹페이지 렌더링
- 렌더링 순서: `requests/response` -> `loading` -> `scripting` -> `rendering` -> `layout` -> `painting`
- 위 순서를 `construction` 파트와 `operation` 파트로 나눌 수 있습니다.
- `construction` : html 파일을 브라우저가 이해할 수 있게 브라우저 언어로 바꿔주는 파트입니다.
이 파트에서는 dom과 cssom을 통해 `Render tree`를 만드는 파트이기도 합니다.
- `operation` : 구조화 된 `Render tree`를 통해서 브라우저에 컨텐츠를 그려주는 부분입니다.
-  [CSS Triggers](https://csstriggers.com) : 
웹 사이트를 제작할 때 렌더링을 해주는 operation 파트에서 layout 변동이 많으면 성능이 점점 떨어집니다.
css가 변동 될 때 composite만 일어나는 게 좋은 성능의 웹사이트를 만드는데 도움이 됩니다.

### 2. dom 조작
- 요소들을 불러와 컨텐츠를 추가,삭제를 할 수 있고 EventListener을 이용해 기능도 수행할 수 있게 만드는 법에 대해 배웠습니다.

### 3. 디버깅
- 개발자 모드에서 source탭을 이용해 디버깅을 하는 법에 대해 배웠습니다.
 breakpoint를 이용해 에러를 추적할 수 있고 watch로 데이터를 검사를 할 수 있습니다.

### 4. localStorage 
localStorage를 이용하기 전까지는 프로젝트를 새로고침(F5) 했을 때 적어두었던 기록들이 없어져 버렸습니다. 
단지 브라우저에서 데이터를 저장해 사용하고 싶다면 `localStorage`를 사용해 앞 문제를 해결할 수 있습니다.


## screen
>   다가오는 할로윈을 맞이하여 커스텀 해봤습니다.

### 기록
<img src="mdImg/screen2.gif">

### 삭제 
<img src="mdImg/screen3.gif">

### 새로고침
<img src="mdImg/screen4.gif">
