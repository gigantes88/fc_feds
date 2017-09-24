import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux'
// import { connect, bindActionCreators } from 'react-redux'
import * as actions from '../Actions';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.setRandomColor = this.setRandomColor.bind(this);
  }
  setRandomColor() {
    const color = [
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
    ];

    this.props.handleSetColor(color);
  }
  render() {
    const color = this.props.color;
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    }

    return (
      <div style={style}>
        <Value number={this.props.number}/>
        <Control 
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(actions.increment()) },
    handleDecrement: () => { dispatch(actions.decrement()) },
    handleSetColor: (color) => { dispatch(actions.setColor(color)) },
  }
  // return bindActionCreators(actions, dispatch); // bindActionCreators는 자동으로 action을 바인딩해준다. 대신 임의의 이름으로 설정할 수 없다.
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
