// 1. 아래의 코드를 ES6 문법으로 바꾸기

// ES5
var Person = (function () {
  // Constructor
  function Person(name) {
    this._name = name;
  }

  // method
  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  // return constructor
  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.


// 2. 1번 정답 코드에 `Static Method`라는 문자열을 반환하는 static method 작성하기

// 3. 1번 정답 코드에 객체의 name property 값을 반환하는 getter 함수 작성하기

// 4. 1번 정답 코드에 객체의 name property 값을 변경하는 setter 함수 작성하기

// 5. 아래의 `Parent` 객체를 상속받는 `Child` 클래스를 만들고 멤버변수 `_z`를 추가하고 `toString()`을 확장해서 `_z`값까지 확장 할 수 있는 코드 작성하기


class Parent {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  toString() {
    return `${this._x}, ${this._y}`;
  }
}