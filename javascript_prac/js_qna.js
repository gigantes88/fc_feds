// *****Question*****
// 여기서 me.__proto__.getName(); 하면 Lee가 찍혀야하는데
// undefined를 찍는다 왜일까?
// me.__proto__.getName == Person.prototype 은 true 찍는데 값을 못찍는 이유가 무엇일까.

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

var me = new Person('Lee');

// $$$$$Answer$$$$$
// me.getName()을 치면 name을 찍는다. 근데 왜 me.__proto__.getName()은 me.prototype.getName()을 못찍는건가
//----------------------------------------------------------------------------------------//

// *****Question*****
// console을 돌려보면 
// foo's this:  { value: 100, foo: [Function: foo] }
// foo's this.value:  100
// bar's this:  { DTRACE_NET_SERVER_CONNECTION: [Function],
// 라고 뜨는데 foo's this:  { value: 100, foo: [Function: foo] } 여기서 this가 가리키는 foo: [Function: foo]가 obj인건가?

var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100 
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();

// $$$$$Answer$$$$$
// node 터미널 상에서는 foo:[Function: foo]라고 뜨고 
// 브라우저 콘솔에서는
// foo's this:  {value: 100, foo: ƒ}
// foo's this.value:  100
// bar's this:  Window {stop: ƒ, open: ƒ, alert: ƒ, confirm: ƒ, prompt: ƒ, …}
// bar's this.value:  1
//----------------------------------------------------------------------------------------//

// *****Question*****
// 여기서 this instanceof arguments.callee 이부분이 의미하는 것이 정확히 파악하지 못하겠다.
// 전체적인 의미는 이해하겠는데 이 if문이 가리키는 의미를 정확히 이해하고 싶다. 

// Scope-Safe Constructor Pattern
function A(arg) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

  /*
  this가 호출된 함수(arguments.callee, 본 예제의 경우 A)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로 이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
  arguments.callee는 호출된 함수의 이름을 나타낸다. 이 예제의 경우 A로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
  */
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arg);
  }

  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);

// $$$$Answer$$$$$
// 
//----------------------------------------------------------------------------------------//
