## 1. ES5와 ES6 문법을 활용하여 자신의 이름을 출력하고 코드에 대한 설명을 주석으로 서술하시오.

## 2. 1부터 9까지 각 수의 제곱을 구하고 `=>`의 작동원리를 주석으로 서술하시오.

## 3. 다음의 `ES5`문법을 `ES6`로 변경하시오.

### 3-1.
```js
function plus(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
```

### 3-2. 
```js
function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}
console.log(sum(1, 2, 3, 4, 5));
```

### 3-3.
```js
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
```

### 3-4.
```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

### 3-5.
```js
var Person = (function () {
  function Person(name) {
    this._name = name;
  }

  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true
```