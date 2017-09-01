// 전역변수 생성시 빈 객체를 만들어서 생성하는 법
var MYAPP = {};
MYAPP.student = {
  name: 'Lee',
  gender: 'Male'
};

function foo() {
  var firstName = 'Ungmo';
  var result = firstName + ' ' + MYAPP.student.name;
  return console.log(result);
}

foo();