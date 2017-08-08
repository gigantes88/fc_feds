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