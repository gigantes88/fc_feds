import * as types from './ActionTypes'; // 아래와 같은 방법
// import { INCREMENT, DECREMENT, SET_COLOR } = './ActionTypes'; 

export function increment() {
  return {
    type: types.INCREMENT,
  }
}
export function decrement() {
  return {
    type: types.DECREMENT,
  }
}
export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  }
}
