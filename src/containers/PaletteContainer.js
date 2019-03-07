import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
    //onSelect를 위한 함수 전달
    handleSelect = color => {
        const { changeColor } = this.props;
        console.log('what')
        changeColor(color);
    };

    render() {
        const { color } = this.props;
        return <Palette onSelect={this.handleSelect} selected={color} />
    }
}

//props로 넣어줄 스토어 상태 값
const mapStateToProps = state => ({
    //store/modules/counter.js에 있는 color를 전달
    color: state.counter.color
});

//props로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
    //store/modules/counter.js에 있는  changeColor를 전달
    //color를 파라미터로 받아 그값을 가지고 CHANGE_COLOR액션 객체를 생성한 다음 스토어에 디스패치하는 함수를 컴포넌트의 prop로 전달
    changeColor: color => dispatch(changeColor(color))
});

//컴포넌트에 리덕스 스토어를 연동해줄 때는  connect함수 사용,
//mapStatetoProps는 스토어안에 있는 값을 props로 전달
//mapDispatchToProps는 액션생성함수들을 props로 전달
//액션생성함수는 호출한다고 변화가 일어나는 것이 아니고 그것을 스토에게 전달해주어야 상태에 변화가 일어난다.

export default connect(
    mapStateToProps, mapDispatchToProps
)(PaletteContainer);
//connect를 호출하여 반환받은 함수에 PaletteContainer를 파라미터로 넣어 호출