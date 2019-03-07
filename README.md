React X Redux
=

React에서 Redux를 배워보자


왜 Redux를 사용하는가?
-
컴포넌트의 구조가 복잡해 질 수록 컴포넌트간 데이터를 주고 받기 힘들어진다.
따라서 스토어를 통한 편리안 상태관리

Redux용어
-

Action : 상태에 어떠한 변화가 필요하게 될 떄 액션을 발생
```
타입을 필수로 가지고 있어야 하며 그외의 값은 개발자 마음대로 지정가능
{
    type: "TOGGLE_VALUE",
    dtat: {
        id: 0,
        text: "데이터"
    }
}

액션 생성함수
const changeInput = data =>({
    type: "CHANGE_INPUT",
    data
})
}

```
Reducer : 변화를 일으키는 함수, 두가지 파라미터를 받아온다.
```
function reducer(stat, action){
    //상태 업데이트 로직
    return changeState;
}

현재의 상태와 전달받은 액션을 참고하여 새로운 상태를 만들어 반환.

```

Store: 리덕스에서는 한 애플리케이션 당 하나의 스토어를 가진다. 스토어에는 현재의 앱상태와 리듀서가 들어가 있고 몇가지 내장함수를 가지고 있다.
```
dispatch: 스토어의 내장함수, 액션을 발생시킨다. dispatch(action) 이런식으로 액션을 파라미터로 전달한다.

subscribe: 스토어의 내장함수, 함수 형태의 값을 파라미터로 받아온다. 특정함수를 전달해주면, 액션이 디스패치 되었을 떄 마다 전달해준 함수가 호출된다.
```




React에서 Redux를 사용하기 위한 라이브러리

redux : 리덕스 모듈
react-redux: 리액트 컴포넌트에서 리덕스를 사용하기 위한 모듈
redux-actions

리액트에 스토어를 연동하기 위해서는 react-redux 라이브러리 안에 있는 Provider라는 컴포넌트를 사용합니다.