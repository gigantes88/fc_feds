// // 특정 날짜 요일 출력

// function getDayName(a, b) {
//   // date 객체 초기화
//   var today = new Date();
  
//   // 요일 배열 초기화
//   var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
//   // 2016년의 a-1월(월은 0부터시작), b일 세팅 
//   today.setFullYear(2016, a - 1, b);

//   // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
//   var day = dayNames[today.getDay()];
  
//   // 해당 요일 문자열 반환
//   return day;
// }
// console.log(getDayName(5, 24));

// //----------------------------------------------------------------------------------------//

// // numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

// function numPY(s) {
//   // p와 y 개수 초기화
//   var strP = 0;
//   var strY = 0;
  
//   // 파라미터로 받은 문자열을 소문자화 시킨다.
//   var lowerStr = s.toLocaleLowerCase();

//   // p, y의 개수 반복문
//   for (var i = 0; i < lowerStr.length; i++) {
//     if (lowerStr[i] === 'p') {
//       strP++;
//     } else if (lowerStr[i] === 'y') {
//       strY++;
//     }
//   }

//   // 만약 p와 y의 개수가 다르면 false 그 외는 모두 true
//   if (strP !== strY) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(numPY('pPoooyY'));
// console.log(numPY('pyy'));
// console.log(numPY('ab'));
// console.log(numPY(''));

// //----------------------------------------------------------------------------------------//

// // palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

// function checkPalindrom(str) {
  
//   // 문자열을 쪼개서 배열로 만들고 합친다.
//   var splitStr = str.split('').join('');

//   // 문자열을 쪼개서 배열을 만들고 뒤집어서 합친다.
//   var reverseStr = str.split('').reverse().join('');

//   // 문자열이 같으면 true 다르거나 문자열 길이가 1이면 false
//   if (splitStr === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // false

// //----------------------------------------------------------------------------------------//

// // 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

// function findMinDistance(array){
//   // 리턴용 배열
//   var shortests = [];

//   // 두 점간의 최단거리
//   var minDistance = Number.MAX_VALUE;
//   array.reduce(function(pre, cur){
//     var distance = Math.abs(pre - cur);

//     // 지금까지 조사된 두 점 간의 거리가 최단거리
//     if (distance === minDistance) {
//       shortests.push([pre, cur]);
//     }

//     // 두 점간의 거리가 최단 거리이면
//     if (distance < minDistance) {
//       minDistance = distance;
//       shortest = [[pre,cur]];
//     }
//     return cur;
//   });
//   return shortests;
// }

// // 1차원 점의 배열
// var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
// console.log(findMinDistance(array)); // [[3, 4], [23, 24]]

//----------------------------------------------------------------------------------------//

// 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
// hint)
// 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function cntEight () {
  var cnt = 0;

  for (var i = 1; i < 10000 + 1; i++) {
    if (i[1] === 8) {
      cnt += cnt++;
    }
  }
  console.log(cnt);
}
cntEight();
//----------------------------------------------------------------------------------------//

// // evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.
// // 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// function evenOrOdd (num) {
//   // if (num % === 0) {
//   //   console.log('Even');
//   // } else {
//   //   console.log('Odd');
//   // }
//   num % 2 == 0 ? console.log('Even') : console.log('Odd');
// }

// console.log(evenOrOdd(37473));
// console.log(evenOrOdd(72));

// //----------------------------------------------------------------------------------------//

// // alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// // s의 길이가 4~6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
// // 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다.

// function alphaString46(s) {
//   // 숫자와 4~6자리만 구하는 정규표현식 사용
//   var regexr = /^\d{4,6}$/g;

//   // 4 또는 6자리를 구할려면
//   var regexr = /^\d{4}(?:\d{2})?$/g;

//   // boolean으로 값을 반환
//   return regexr.test(s);
// }

// console.log(alphaString46(''));
// console.log(alphaString46('a234'));
// console.log(alphaString46('1234'));
// console.log(alphaString46('12345'));
// console.log(alphaString46('123456'));
// console.log(alphaString46('12345b'));
