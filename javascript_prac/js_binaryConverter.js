function Stack() {
	let items = [];
	
	this.push = function(element) {
		return items.push(element);
	}
	this.pop = function(){
		return items.pop();
	}
	this.peek = function() {
    	return items[items.length-1];
	}
	this.size = function() {
    	return items.length;
	}
	this.isEmpty = function() {
    	return items.length === 0;
	}
	this.clear = function() {
    	return items = [];
	}
	this.print = function() {
		console.log(items.toString());
  }
}


// 내 코드
// let stack = new Stack();
// let num = 10;
// while (num > 0) {
//   num % 2 === 0 ? stack.push(0) : stack.push(1);

// 	num = num / 2;
// 	Math.floor(num);
// }
// console.log(num);

// 강사님 코드
function binaryCoverter(decimal) {
	let remStack = new Stack();

	let rem, binaryString = '';

	while(decimal > 0) {
		rem = Math.floor(decimal % 2);
		remStack.push(rem);
		decimal = Math.floor(decimal / 2);
	}

	while(!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	
	return binaryString;

}

console.log(binaryCoverter(10));