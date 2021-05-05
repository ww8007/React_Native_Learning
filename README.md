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

    flexDirection : column
    colum이 기본 속성이다.
    flexDirection 기본으로 통해서 바꿀 수 있다.

- website : flexDirection : row

> style.container

    모든 공간을 포함하는 것을 의미한다.
    flex: 1을 기본적으로 가지면서
    이 안에 내용을 변경하게 되면 모든 내용이 변경된다.

- RN에서의 flex
  - flex 값들의 합이 container flex 기준의 값에서 a/a+b의 값을 가지게 된다.
  - yellowView: 1
  - blueView:3
  - blue : 3/4

> flex를 이용해서 코드를 작성하는 것이 좋음

    이유는 아이패드로 열거나 핸드폰으로 열거나
    코드를 작성하는 것이 좀 더 효율적으로 생성될 수 있다.
    반응형으로 작성하는 것이 flex로 작성하는게 더욱 효과적이기 때문!!!

### Loading Screen

1. Loading 컴포넌트 작성
1. View와 Text를 이용해서 style=styles.container 생성 후 내용 기입

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <Text>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
});

export default Loading;
```

1. import 해서 내용 사용

> RN 에서의 padding

    1. paddingHorizontal
        왼쪽 여백으로 생각하면 됨
    1. paddingVertical
        수직 여백을 생각하면 됨
    일반적인 react에는 존재하지 않는 특성이다.

> RN 에서의 px값

    기본적으로 숫자만 써도 rn이 자동으로 변환을 시켜줌
    만약 px을 명시하고 싶다면
    fontSize : "20px" 이렇게 적어주면 된다.

### API 사용

expo install expo-location

import \* as Location

- Location.getCurrentPositionAsync()
  - 현재 위치 받아오는 api
- class 형으로 해서 componentDidMount()로 불러온다.

> getLocation 문제점

    많은 정보를 가지고 있지 않다.

### 날씨 불러오기

openweathermap.org

- api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
- axios 이용

const {data} = axios.get("주소")

> 주의점

    axios에는 http나 https 주소가 들어가야 한다.
    이를 어길 시 오류가 나므로 이 점 유의!!!
