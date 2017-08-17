/**********
*
* 0부터 n까지의 합을 구하는 패턴 (arguments.callee를 활용한 반복 패턴)
*
**********/
function sum(num) {
  if (num === 0) {
    return num;
  } else {
    // 파라미터 값의 마지막 값까지 반복해서 더한다.
    return num + arguments.callee(num-1);
  }
}

console.log(sum(3));
console.log(sum(5));
//----------------------------------------------------------------------------------------//
