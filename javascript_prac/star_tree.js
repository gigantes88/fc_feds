/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex) 
0
2
4
6
8
*/
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log (i);
  }
}

/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
ex) 02468
*/
var result = '';
for (var j = 0; j < 10; j++) {
  if (j % 2 === 0) {
    result += j;
  }
}
console.log(result);


/*
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/

for (var k = 9; k > 0; k--) {
  if (k % 2 === 1) {
    console.log(k);
  }
}

/*
while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8
*/
var n = 0;
while (n <= 10) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}

/*
while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/
var x = 10;
while (x > 0) {
  if (x % 2 === 1) {
    console.log(x);
  }
  x--;
}


/*
삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.
// 루프가 5번 돈다.
// 별이 하나씩 늘어난다.
// 높이(line)가 5
*
**
***
****
*****

*/

for ( var q = 1; q <= 5; q++ ) {
  switch (q) { 
    case 1 :
      console.log('*');
      break;
    case 2 :
      console.log('**');
      break;
    case 3 :
      console.log('***');
      break;
    case 4 :
      console.log('****');
      break;
    case 5 :
      console.log('*****');
      break;
    default :
      break;
  }
}

for (var t = 1; t <= 5; t++) {  // *을 5줄 만들기 위해 t값을 1부터 5까지 반복해서 수행할 수 있도록 한다.
  var result2 = ''; // 첫번째 for 문을 다 돌고 *을 찍기 위한 변수가 중복되지 않도록 빈값을 넣어 초기화 시켜준다.
  for (var s = 1; s <= t; s++) {  // 조건식에 s는 t보다 작거나 같다라고 설정해 첫번째 for문에서 t에 설정한 수만큼 각 줄마다 별을 찍을 수 있게 한다.
    result2 += '*'; // for문의 변수 s가 반복되는 수만큼 result2에 별을 누적시켜 다음 console.log로 값을 넘긴다.
  }
  console.log(result2); // 첫번째 for 문이 돌 때 두번째 for문에 저장한 별을 찍고 다음 for문 돌 때 두번 반복된 값을 찍도록 해 삼각형을 만든다.
}

/*
트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****

*/
for (var c = 1; c <= 8; c++) {  // 총 8줄을 만들기 위해 선언

  if (c <= 3) { // 처음 별 3줄까지 찍는 분기점
    var result3 = ''; // 별 찍기 위한 변수 초기화
    for (var d = 1; d <= c; d++) {  
      result3 += '*';
    }
    console.log(result3); // 별 3줄 찍는 구문
  } else if (c > 3 && c <= 8) { // 4번째 줄부터 8번째 줄까지 별을 찍는 분기점
    var result4 = ''; // 4~8번째 줄 찍기 위한 변수 초기화
    for (var e = 1; e <= c - 3; e++) { 
      result4 += '*';
    }
    console.log(result4); // 4~8번째 순서대로 별찍는 구문
  }
}