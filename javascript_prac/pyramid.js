var line = 5;
var result = '';
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