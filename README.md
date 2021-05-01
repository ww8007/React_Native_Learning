# React_Native_Learning

리엑트 네이티브 학습

### Requirement

node -v
npm
Xcode

- expo를 통해 핸드폰으로 디버깅 가능
- npm install -g expo-cli

### Expo vs RN CLI

- RN CLI - command line

  - xcode file 생성해줌
  - 안드로이드와 ios 모두 생성해줄 수 있음
  - rn의 장점은 api관리가 쉽다는게 있음

- expo
  - 핸드폰을 통해서 디버깅이 가능함
  - RN CLI를 통한다면 native file을

> RN의 필요한 점

    회사의 경우는 필요한 경우가 생길 수 있음
    하지만 expo로 대부분의 경우를 코딩이 가능하고 필요한 경우 rn을 사용하면 됨

### expo init

react와 동일하게 초기 파일들을 설정해 줄 수 있다.

### git 레포 추가하기

> git remote add origin "주소"
> git pull origin master --allow-unrealated-histories

### expo 실행시키기

- ios의 경우
  - expo login
    사용자 이름과 비밀번호를 입력하면 된다.

### react native 동작

1. Swift or objective-c with ios, Java or 코틀린
   - 네이티브 방식임
2. web view 앱을 만듬
   - Cordova or PhoneGap을 이용 html, css를 만듬
   - 하이브리드 웹뷰 방식
   - 웹사이트 안에 앱을 만든다고 생각하면 됨
   - 아마존 어플리케이션을 예로 들 수 있음
   - rn 방식이 이를 기반이라고 생각하면 됨
     > js로 파일을 native에서 열 수 있는 브릿지를 생성해줌

> RN의 단점

    브릿지를 이용하기 때문에 많은 트래픽을 처리하는데는 문제가 있음
    인스타 그램 이나 데이팅 앱을 만드는 것 rn이 최적화가 잘됨
    3d, video의 경우에는 브릿지의 최적화에 대해서는 최적화를 잘 해줘야 한다.

> RN 규칙

    브릿지의 규칙 때문에 이렇게 작성해야 함
    div -> View
    span -> Text

- 오류를 해결
  오류가 났을 때는 서버를 중지 시키고 다시 빌드를 해주면 된다.

> rn과 html의 차이점

    모든 것이 js와 동일하게 생각하면 안된다.
    color, fontSize

### style 추가 방법

> styles.text 로 만들어서 color를 지정시켜 주면 된다.

```javascript
<View style={styles.container}>
  <Text style={styles.text}>See you later</Text>
  <StatusBar style="auto" />
</View>
```

### 리엑트 네이티브

> flex 속성

    colum이 기본 속성이다.
    flexDirection 기본으로 통해서 바꿀 수 있다.
