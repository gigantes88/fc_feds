function solution(arr) {
  var answer = true;
  arr = arr ? arr : '';
  // return answer;

  let result = arr.sort( (a, b) => {return a - b});
  return console.log(result);
}
let test = [4,3,1,2];
solution(test);