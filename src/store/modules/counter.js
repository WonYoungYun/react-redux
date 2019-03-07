//액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성함수 정의
//export를 붙여 리덕스를 연동하고 호출함
export const changeColor = color => ({ type: CHANGE_COLOR, color })
export const increment = color => ({ type: INCREMENT, color })
export const decrement = color => ({ type: DECREMENT, color })

//초기상태

const initialState = {
    color: 'red',
    number: 0,
};

//리듀서
export default function counter(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color,
            };
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            }
        default: return state;
    }
}