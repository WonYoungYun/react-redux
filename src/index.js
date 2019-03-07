import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//스토어 생성 및 루트 디듀서 호출
import { createStore } from 'redux';
import rootReducer from './store/modules';

//리액트와 리덕스를 연동하기위한 Provider
import { Provider } from 'react-redux'

//리덕스 크롬 개발자도구 적용
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


