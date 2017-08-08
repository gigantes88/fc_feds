// 12. 문자열을 값으로 갖는 name 프로퍼티와 name 프로퍼티를 출력하는 sayName 메소드를 갖는 객체 obj를 생성하라. 단 객체 리터럴 방식을 사용한다.

// 13. 문자열을 값으로 갖는 name 프로퍼티와 name 프로퍼티를 출력하는 sayName 메소드를 갖는 객체 obj를 생성하라. 단, 생성자 함수 방식(함수명 Person)을 사용한다.


// 14. var person = { 'my-name': 'Lee' }; 일 때, my-name 프로퍼티의 값을 'Kim'으로 변경하고 console.log()를 사용하여 출력하는 코드를 작성하라.


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