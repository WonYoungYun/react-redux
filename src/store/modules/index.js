import { combineReducers } from 'redux';
import counter from './counter';

//리듀서가 여러개일 경우 combineReducers를 사용하여 하나로 만들어 줍니다.
export default combineReducers({
    counter,
    //다른 리듀서를 만들면 여기에 넣어줍니다.
})