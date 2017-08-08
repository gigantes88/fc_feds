var line2 = 3;

for (var i = 0; i < line2; i++) {

}




var pyramid = function (star_num) {

  var line = star_num; // 별의 행
  var result = '';  // 공백과 별

  for (var i = 0; i < line; i++) {
    for (var k = line-1; k > i; k--) {
      result += ' ';
    }
    for (var s = i; s >= -i; s--) {
      result += '*';
    }
    result += '\n';
  }

  console.log(result);

}

pyramid(3);