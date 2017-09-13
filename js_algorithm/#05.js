/*
# 5. 문자열 내 p와 y의 개수

numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다.
대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true,
다르면 false를 리턴하도록 함수를 완성하라.
'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.
*/

// for 사용
function numPY(s) {
  var cntP = 0, cntY = 0;

  s = s ? s : '';

  var lowerCaseStr = s.toLowerCase();

  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'p') {
      cntP++;
    } else if(lowerCaseStr[i] === 'y') {
      cntY++;
    }
  }

  return cntP === cntY;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true

// 정규표현식을 사용한 방법
function numPY(s) {
  s = s ? s : '';

  return (s.match(/p/ig) ? s.match(/p/ig).length : 0) === (s.match(/y/ig) ? s.match(/y/ig).length : 0);
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true
