function Queue() {
  let items = [];
  this.enqueue = function(element) {
    return items.push(element);
  }
  this.dequeue = function() {
    // return items.shift();  // queue
    return items.pop();
  }
  this.front = function() {
    return items[0];
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  this.print = function() {
    console.log(items.toString());
  }
}



function SimilarQueue(num){
  let inbox, outbox = [];

  this.enqueue = function(element) {
    return inbox.pop(element);
  }
  
  this.dequeue = function() {
    if (outbox.length > 0 ){
      return outbox.pop();
    }
    while(inbox.length > 1) {
      outbox.push(inbox.pop());
    }
    return inbox.pop().toString();
  }
}

let queue = new SimilarQueue();

