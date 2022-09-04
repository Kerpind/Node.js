# Node.js

## 1. 수업소개(Node.js 역사)

1990에 WEB이 처음 등장하면서 WEB페이지에 표현이 가능해지면서, 종이로 되어있는 정보들을 WEB페이지에 담기 시작하였습니다.  

HTML에 담기 시작했는데 불만이 생기게 되었습니다. HTML에 수동으로 하나씩 작업을 해야했기 때문입니다.  

그리고 모든 방문자들이 글을 올릴 수 있게 하고 싶었지만 위험부담 때문에 웹 소유자만이 수정할 수 있어야 했습니다.  

그렇다보니 귀찮고 반복적인 HTML 작업을 기계가 직접 할 수 있게 하고싶었습니다. 그래서 만들어진게 Node.js 입니다.  

이미 JavaScript에 익숙한 사람들이 배우지 않고 웹 페이지를 자동으로 생성하는 서버 쪽 애플리케이션을 만들수 있게 하고 싶었습니다.  

1995년 상업용 웹브라우를 만든 Netscape의 회사에서 브랜든 아이크에게 JavaScript 제작을 의뢰합니다.  

이 JavaScript를 통해 사용자와 상호작용하는 애플리케이션의 면모를 갖추게 됩니다.  

문서에서 애플리케이션으로 확장되는 단계였습니다. 컴퓨터 프로그래밍 언어로써 독점적인 부분도 있었지만,  

반대로 웹 브라우저에서 밖에 사용 할 수 없는 편파적인 언어의 모습도 가지고 있었습니다.

2008년 구글이 크롬 웹브라우저에서 동작하는 자바스크립트의 성능을 개선하기 위해서 V8엔진을 개발, 이걸 오픈 소스로 공개합니다.  
그리고 그걸 Node.js 창시자인 라이언 달은 V8엔진을 기반으로 하는 Node.js를 만들게 됩니다.  
Node.js를 통해 JavaScript가 웹 브라우저를 제어하는것이 아닌 컴퓨터 자체를 제어하도록 만들었습니다.  
(파이썬, Java, PHP, 루비)  

Node.js 개발 이후 웹 브라우저가 아닌 다른 영역으로 확대가 되기 시작하게 되었습니다.

## 2. 수업의 목적

HTML 소스에서 태그를 수정하려고 한다면 각 파일의 태그를 하나씩 수정하여야 합니다.  

그 태그가 갯수가 많으면 많을수록 수정해야 하는 태그들이 많아집니다.  

이런 상황에서 Node.js가 되어있다면 파일의 특정 태그만 수정하게 된다면 수정이 필요한 모든 부분의 태그가 수정이 됩니다.  

화면을 생성하는것도 가능하고 삭제, 수정도 페이지에서 진행하면 파일이 생성, 수정, 삭제도 가능하게 됩니다.

이런걸 Node.js 설정을 통해 작업을 할 수 있습니다.

## 3. Node.js 설치파일 방법

>https://nodejs.org/ko/

해당 Url에서 설치 파일을 다운받아 설치 후 cmd창을 통해 'node -v'나, 'node', 'npm'을 통해 설치가 된건지 확인할 수 있다.

프로젝트 생성 후 js파일을 생성하여 console을 적어주고, cmd 창에서 해당 디렉토리 경로로 이동 후 해당 js를 node로 부르면 comsole의 값이 표시되게 된다.

![img.png](img.png)

> 1. Intellij에서도 프로젝트를 생성하여 작업을 수행할 수 있다. 이 부분은 확인이 추가로 필요해 보인다.  
> 참고 Url : https://hoonjo.tistory.com/15  
> 
> 2. 생성할 때 package manager와 template가 뭔지 궁금해서 찾아보았더니 package manager는 패키지 관리자이다. 말 그대로 패키지를 관리해주는 종류인것이다.  
> 참고 Url : https://yceffort.kr/2022/05/npm-vs-yarn-vs-pnpm  
> 
> 3. template의 경우 템플릿 엔진이라는건데 Java Script를 사용해서 HTML을 랜더링할 수 있게 도와주는 도구다.
> 참고 Url : https://velog.io/@juneverbena/Node.js-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%97%94%EC%A7%84, https://yahohococo.tistory.com/43

## 4. JavaScript 데이터 타입 종류

1. Number(숫자)
2. String(문자)
3. Variable 형식 및 활용

## 5. Template Literal

String을 변수에 넣게 되면 줄 바꿈이나 데이터를 넣는 방식에 대해 불편함이 있다.

그럴경우 Template Literal를 사용하여 문자를 편하게 수정하거나 할 수 있다.(백틱을 설명하는 것  같다.)

## 6. Url의 이해

![img_1.png](img_1.png)
>출처 : https://www.youtube.com/watch?v=Zhbvui_T9VY&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm&index=14

만약 포트번호를 80으로 했다면 포트번호를 적지 않아도 된다.  
왜냐하면 웹서버는 굉장히 유명한 서버여서 80번 포트를 쓴다 라고 전세계적으로 약속이 되어있기 때문이다.  
기본값이 80인 것이다.

쿼리스트링의 경우 ? 로 시작되고, 값과 값은 & 를 써서 구분, 값의 이름과 값은 = 을 쓰기로 약속되어있다.

## 7. Node.js의 파일 읽기 기능, 파일을 이용해 본문 구현

readFile을 통해서 같은 경로안에 있는 파일을 호출해오는 형태로 판단된다.

> HTML 화면에서 image를 불러오지 못하는 이유는 서버에 이미지 파일이 없기 때문이다.  
> 서버 기동 후 요청 Url이 root로 시작되기에 이미지를 못불러오는 것이다.  
> 자세한건 좀 더 테스트를 진행해야 할 것 같다.  
> 참고 Url : https://not-to-be-reset.tistory.com/263  
> 그리고 Main으로 넘어갔을 때 undifind가 뜨는 이유도 찾아봐야 할 것 같다.

## 8. 조건문

conditional

## 9. App 제작 - 홈페이지 구현

7의 메모에 보면 Main의 undifind의 경우 구현을 하지 않아서 그렇다.  
구현 작업 후 강의 마지막 부분에서 얘기하시는게 하단의 부분이 빠져도 된다고 하셨다.

> if (pathName === '/') {  
> if (queryData.id === undefined) {  
> fs.readFile(`data/${queryData.id}`, 'utf-8', function (err, description) {

왜 그럴까 고민 해봤는데 Main 페이지의 경우 queryData.id의 값이 필요 없기 때문이다.

## 10. 글목록 츌력하기

readdir을 통해서 특정 디렉토리의 파일들의 정보를 불러올 수 있다.

> fs.readdir(testFolder, function(error, filelist){ console.log(filelist); })

그걸 통해서 디렉토리의 파일의 리스트를 호출, 표현해줄 수 있다.

## 11. Function

## 12. 동기와 비동기

readFileSync => 동기방식
readFile => 비동기방식

## 13. Callback

## 14. PM2

NPM 이라는게 있다. 파일이 수정되는 여부를 판단해서 재시작을 해주는 프로그램이다.

그 중에 PM2 라는게 있다.

> #npm install pm2 -g
> 
> 설치 명령어를 cmd에 타이핑하면 된다.

> #pm2 start main.js
> 
> 실행 할 경우 해당 파일의 경로로 가서 타이핑하면 된다.  
> 만약 실시간으로 확인하고 싶다면 뒤에 --watch 를 붙여주면 된다.

> #pm2 monit
> 
> PM2에 의해 실행되고 있는 파일들을 볼 수 있다.  
> 만약에 의도하지 않게 종료가 된다고 하더라도 재시작을 해줄 수 있다.  
> 키보드 q를 누르면 종료된다.

> #pm2 list
> 
> 현재 실행중인 프로세스의 리스트를 보려고 할 때 쓰는 명령어다.

> #pm2 stop main
> 종료하고 싶은 프로세스가 있다면 PM2 List 중 프로세스의 Name을 확인하여 명령어를 실행하면 된다.

> #pm2 log
> 자동으로 실행되기 때문에 로그나 오류를 찾고 싶을 때 쓰는 명령어다.

## 15. form 태그

from 태그를 통해서 해당 글의 등록, 수정, 삭제 등이 가능하게 할 수 있다.  
그런데 그냥 할 경우 Url에 정보가 노출될 수 있다.  
그렇다보니 method를 post 방식을 통하면 Url에 노출이 안되게 된다.  
Url의 길이는 한정되어 있다.

## 16. POST 방식으로 전송된 데이터 받기

data에 전달된 데이터를 받는 테스트이다.  
request를 통해 데이터를 받을 수 있다.  
만약, 데이터의 양이 많을 경우 처리하는 방식도 있다.  
> 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB  
> if (body.length > 1e6) request.connection.destroy();

## 17. 파일 생성과 리다이렉션

다른 페이지로 보내는것을 리다이렉션이라고 한다.

## 18. 제작-글수정-파일명 변경, 내용저장

main에서 파일명의 정보를 통해 ID가 지정되어있는 경우 파일명을 수정하게 되면서 파일을 못찾게 될 수 있다.  
그렇게 되지 않기 위해 따로 input 타입 hidden을 지정하여 해당 title의 id를 가져갈 수 있게 하여야 한다.  

## 19. 제작-글삭제-삭제버튼 구현

쿼리스트링의 경우 GET 방식이다.  
delete의 경우 get 방식을 사용할 경우 페이지 Url을 복사하여 삭제를 할 수 있으므로 post 방식을 사용하여야 한다.

## 20. 배열과 객체

배열은 대괄호[]를 사용하고 객체는 중괄호{}를 사용한다.

## 21. 템플릿 기능 정리정돈히기

리펙토링 작업 완료.  

## 22. 모듈의 형식

> module.exports = M;

해당 형태를 통해 모듈 밖에서도 exports된 객체를 사용할 수 있도록 한다.

## 23. Security

sanitize(살균, 소독)  
npm sanitize-html란 보안모듈이다.  
사용자가 입력한 정보를 외부로 출력할 때 오염된 정보가 있다면 그 정보를 소독하는 것입니다.

script 태그 자체를 넣어도 사용할 수 없게 하는 것 입니다.

> 허용 태그 테스트 중 h1 태그를 허용하지 않았는데도 적용되는걸 볼 수 있다.  
> 이건 sanitize-html의 변화 때문인지 내일 확인이 필요할 것 같다.  

## 24. API(Application Programming Interface)

약속된 조작장치 = interface
> http.createServer([requestListener])  
> 대괄호의 의미는 생략가능하단 뜻이다. (있을수도, 없을수도 있다.)

## 25. Node.js AWESOME

여러 모듈이 있습니다. 참고해서 다양한 모듈을 확인하면 좋습니다.

## 26. pm2 보충학습

> #pm2 kill
> pm2 실행된 모든걸 종료하는 명령어다.

> #pm2 start main.js --watch --no-daemon
> pm2의 실행과 동시에 log까지 확인할 수 있는 명령어다. 나가려면 Ctrl+C를 누르면 된다.  
> 종료할 때엔 kill을 통해 종료를 하는게 좋다. 종료가 안되는 경우도 발생하기 때문이다.

그런데 이렇게 설정 후 Create를 할 시 재시작이 되는 경우가 생긴다.  
내가 원하는 경우에만 재시작이 되어야지 안그러면 세션 문제나 메모리에 저장된 데이터가 사라질 수 있는 문제가 발생한다.

이럴 경우엔 kill을 시킨 후 ignore는 무시한단 뜻으로 watch할 때 data 디렉토리에 있는 모든 파일에 대해서 재시작을 안한다는 뜻이다.  
만약 디렉토리가 여러개라면 띄어쓰기 후 추가를 하면 된다.
> pm2 start main.js --watch --ignore-watch="data/* sessions/*" --no-daemon


시청 중..
https://www.youtube.com/watch?v=_yEH9mczm3g&list=PLRx0vPvlEmdD1pSqKZiTihy5rplxecNpz
