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

// 즉시 실행함수를 통한 전역변수 사용 억제

(function () {
  var GLOBALVAR = {};

  GLOBALVAR.student = {
    name: 'Lee',
    gender: 'male'
  };

  console.log(GLOBALVAR.student.name);
}());

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