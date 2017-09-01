// 특정 날짜 요일 출력

function getDayName(a, b) {
  // date 객체 초기화
  var today = new Date();
  
  // 요일 배열 초기화
  var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // 2016년의 a-1월(월은 0부터시작), b일 세팅 
  today.setFullYear(2016, a - 1, b);

  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  var day = dayNames[today.getDay()];
  
  // 해당 요일 문자열 반환
  return day;
}
console.log('특정요일 출력 : ' + getDayName(5, 24));

//----------------------------------------------------------------------------------------//

// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

function numPY(s) {
  // p와 y 개수 초기화
  var strP = 0;
  var strY = 0;
  
  // 파라미터로 받은 문자열을 소문자화 시킨다.
  var lowerStr = s.toLocaleLowerCase();

  // p, y의 개수 반복문
  for (var i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'p') {
      strP++;
    } else if (lowerStr[i] === 'y') {
      strY++;
    }
  }

  // 만약 p와 y의 개수가 다르면 false 그 외는 모두 true
  if (strP !== strY) {
    return false;
  } else {
    return true;
  }
}
console.log('p와 y의 개수1 : ' + numPY('pPoooyY'));
console.log('p와 y의 개수2 : ' + numPY('pyy'));
console.log('p와 y의 개수3 : ' + numPY('ab'));
console.log('p와 y의 개수4 : ' + numPY(''));

//----------------------------------------------------------------------------------------//

// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
  
  // 문자열을 쪼개서 배열로 만들고 합친다.
  var splitStr = str.split('').join('');

  // 문자열을 쪼개서 배열을 만들고 뒤집어서 합친다.
  var reverseStr = str.split('').reverse().join('');

  // 문자열이 같으면 true 다르거나 문자열 길이가 1이면 false
  if (splitStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log('palindrome1 : ' + checkPalindrom('dad')); // true
console.log('palindrome2 : ' + checkPalindrom('mom')); // true
console.log('palindrome3 : ' + checkPalindrom('palindrom')); // false
console.log('palindrome4 : ' + checkPalindrom('s')); // true

//----------------------------------------------------------------------------------------//

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  // 리턴용 배열
  var shortests = [];

  // 두 점간의 최단거리
  var minDistance = Number.MAX_VALUE;
  array.reduce(function(pre, cur){
    var distance = Math.abs(pre - cur);

    // 지금까지 조사된 두 점 간의 거리가 최단거리
    if (distance === minDistance) {
      shortests.push([pre, cur]);
    }

    // 두 점간의 거리가 최단 거리이면
    if (distance < minDistance) {
      minDistance = distance;
      shortest = [[pre,cur]];
    }
    return cur;
  });
  return shortests;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log('최단거리 배열 : ' + findMinDistance(array)); // [[3, 4], [23, 24]]

//----------------------------------------------------------------------------------------//

// 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
// hint)
// 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function cntEight () {
  
}

//----------------------------------------------------------------------------------------//

// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

function evenOrOdd (num) {
  // if (num % === 0) {
  //   console.log('Even');
  // } else {
  //   console.log('Odd');
  // }
  return num % 2 == 0 ? 'Even' : 'Odd';
}

console.log('짝수냐 홀수냐1 : ' + evenOrOdd(37473));
console.log('짝수냐 홀수냐2 : ' + evenOrOdd(72));

//----------------------------------------------------------------------------------------//

// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// s의 길이가 4~6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
// 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다.

function alphaString46(s) {
  // 숫자와 4~6자리만 구하는 정규표현식 사용
  var regexr = /^\d{4,6}$/g;

  // 4 또는 6자리를 구할려면
  var regexr = /^\d{4}(?:\d{2})?$/g;

  // boolean으로 값을 반환
  return regexr.test(s);
}

console.log('4개의 숫자만 구하라1 : ' + alphaString46(''));
console.log('4개의 숫자만 구하라2 : ' + alphaString46('a234'));
console.log('4개의 숫자만 구하라3 : ' + alphaString46('1234'));
console.log('4개의 숫자만 구하라4 : ' + alphaString46('12345'));
console.log('4개의 숫자만 구하라5 : ' + alphaString46('123456'));
console.log('4개의 숫자만 구하라6 : ' + alphaString46('12345b'));

//----------------------------------------------------------------------------------------//

// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
// 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  // 빈문자열 체크 및 문자열 배열로 초기화
  s = s ? s : '';
  var str = s.split('');
  console.log(str);
  
  // 배열화된 문자열 홀짝 체크
  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  // 배열을 문자열로 합침
  return str.join('');
}

console.log('toWeirdCase : ' + toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'

//----------------------------------------------------------------------------------------//

// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.

function hideNumbers(str){
  // 빈문자열 체크
  str = str ? str : '';

  // 정규표현식을 사용해 끝에서 4자리를 제외한 나머지 숫자를 *로 반환
  return str.replace(/\d(?=\d{4})/g, "*");
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888

//----------------------------------------------------------------------------------------//

// strToInt 메소드는 문자열 str을 매개변수로 받는다.
// str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.
// 예를들어 str이 ‘1234’이면 1234를 반환하고, ‘-1234’이면 -1234를 반환한다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str){
  // 빈문자열이 있는지 체크
  str = str ? str : '';
  
  // number -> string으로 변환
  var result = parseInt(str);

  return result;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

//----------------------------------------------------------------------------------------//

// waterMelon 함수는 정수 n을 매개변수로 입력받는다.
// 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.
// 예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.

function waterMelon(n){
  // 빈문자열 체크
  n = n ? n : '';
  // 수박 문자열 초기화
  str = '';

  // 짝수일 때 수 홀수일 때 박을 str에 담는다.
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      str += '수';
    } else {
      str += '박';
    }
  }

  return str;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));

//----------------------------------------------------------------------------------------//

// nextSqaure함수는 정수 n을 매개변수로 받는다.
// n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
// 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.

function nextSqaure(n){
  // 빈문자열 체크
  n = n ? n : '';
  // 제곱근 변수
  var sqrt = Math.sqrt(n);

  // 만약 매개변수가 정수이면서 제곱근이면 
  return Number.isInteger(sqrt) ? Math.pow((sqrt+1),2) : 'no';
}

console.log('제곱근인가? : ' + nextSqaure(3));   // no
console.log('제곱근인가? : ' + nextSqaure(121)); // 144

//----------------------------------------------------------------------------------------//

// 11. 배열의 최대/최소값 구하기
// 배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array); // es5
  return Math.max(...array); // es6
}
console.log('최대값은 ? : ' + getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
}
console.log('최소값은 ? : ' + getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

//----------------------------------------------------------------------------------------//

// 어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.
// 약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

function sumDivisor(num) {
  var divisior = 0;
  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisior += i;
    }
  }
  return divisior; 
}

console.log('약수의 합은 ? : ' + sumDivisor(12)); // 28

//----------------------------------------------------------------------------------------//

// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.
// 소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …
// 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

function numberOfPrime(n) {
  var cnti = 0;
  for (var i = 1; i <= n; i++) {
    var cntj = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        cntj++;
      }
    }
    if (cntj === 2) {
      cnti++
    }
  }
  return cnti;
}

console.log('소수의 개수는? : ' + numberOfPrime(5)); // 3
console.log('소수의 개수는? : ' + numberOfPrime(13)); // 6
console.log('소수의 개수는? : ' + numberOfPrime(20)); // 8
console.log('소수의 개수는? : ' + numberOfPrime(100001)); // 25

//----------------------------------------------------------------------------------------//

// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

// 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3이라면 2를 반환한다.

function fibonacci(n) {
  var pre = 0;
  var cur = 1;
  var result = 0;

  for (var num = 0; num < n; num++) {
    result = pre + cur;
    pre = cur;
    cur = result;
  }
  return result;
}

// console.log('피보나치 수열 ? ' + fibonacci(2)); // 1
console.log('피보나치 수열 ? ' + fibonacci(3)); // 2
// console.log('피보나치 수열 ? ' + fibonacci(4)); // 3
// console.log('피보나치 수열 ? ' + fibonacci(5)); // 5
// console.log('피보나치 수열 ? ' + fibonacci(6)); // 8

//----------------------------------------------------------------------------------------//

// 하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
// 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200
// Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
// 예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.

function isHarshad(n){
  var arr = String(n).split('');
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]*1;
  }
  return (n & sum) === 0 ? true : false;
}

console.log('하샤드 수가 맞나? : ' + isHarshad(10)); // true
console.log('하샤드 수가 맞나? : ' + isHarshad(12)); // true
console.log('하샤드 수가 맞나? : ' + isHarshad(18)); // true
console.log('하샤드 수가 맞나? : ' + isHarshad(13)); // false
console.log('하샤드 수가 맞나? : ' + isHarshad(11)); // false

//----------------------------------------------------------------------------------------//

// adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.
// x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.
// 예를들어 x가 3, y가 5이면 12를 리턴한다.

function adder(x, y){
  let sum = 0;
  let max = 0;
  let min = 0;

  if (x < y) {
    min = x;
    max = y;
  } else if (x > y) {
    min = y;
    max = x;
  } else if (x === y) {
    return x || y;
  }

  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;  
}

console.log('두 사이의 수를 모두 더하거나 같은 수를 더하면 ? : ' + adder(3, 5)); // 12
console.log('두 사이의 수를 모두 더하거나 같은 수를 더하면 ? : ' + adder(5, 5)); // 5
console.log('두 사이의 수를 모두 더하거나 같은 수를 더하면 ? : ' + adder(7, 3)); // 25
console.log('두 사이의 수를 모두 더하거나 같은 수를 더하면 ? : ' + adder(-7, 3)); // -22

//----------------------------------------------------------------------------------------//

// 17. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {
  let result = arr.reduce((pre, cur) => {
    let multiply = pre * cur;
    return cur;
  });

}

// console.log('배열 요소 곱 가장 큰 값은 ? ' + adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log('배열 요소 곱 가장 큰 값은 ? ' + adjacentElementsProduct([3, 6, -2, -5])); // 21

//----------------------------------------------------------------------------------------//

// 18. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

function getArray(arr) {

}

var arr = [1, 2, 3, 4, 5, 6];
console.log('배열 특정값은 ? ' + getArray(arr)); // [ 4, 6 ]

//----------------------------------------------------------------------------------------//

// 19. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array){

}

var testArray = [5, 3, 4];
console.log('평균은? ' + average(testArray)); // 4 (edited)