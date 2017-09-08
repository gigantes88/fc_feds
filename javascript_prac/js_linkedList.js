function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  let length = 0,
      head = null;

  // append
  this.append = function(element) {
    let node = new Node(element),
        current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  // removeAt
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = head,
          previous,
          index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
  
      return current.element;
    } else {
      return null;
    }
  }
  // insert
  this.insert = function(position, element) {
    if (position >=0 && position <= length) {
      let node = new Node(element),
          current = head,
          previous,
          index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;
      }
      length++;

      return true;
    } else {
      return false;
    }
  }
  // remove
  this.remove = function(element) {
    let index = this.indexOf();
    return this.removeAt(index);
  }
  // indexOf
  this.indexOf = function() {
    let current = head,
        index = 0;

    while(current) {
      if(element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // isEmpty
  this.isEmpty = function() {
    return length === 0;
  }
  // size
  this.size = function() {
    return length;
  }
  // toString
  this.toString = function() {
    let current = head,
        string = '';
    while(current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }
  // getHead
  this.getHead = function() {
    return head;
  }
}
