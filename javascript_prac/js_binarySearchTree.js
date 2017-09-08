function BinarySearchTree() {
  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  
  let root = null;
  // 삽입
  this.insert = function(key) {
    let newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  let insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  // 전위검색
  let preOrderTraverseNode = function(node, callback) { 
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  this.preOrderTraverse = function(callback) {
      preOrderTraverseNode(root, callback); 
  }
  
  // 중위검색
  let inOrderTraverseNode = function(node, callback) { 
    if (node !== null) {
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
    }
  }
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  }

  // 후위검색
  let postOrderTraverseNode = function(node, callback) { 
    if (node !== null) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
    }
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  }

  // 최소
  this.min = function() {
    return minNode(root);
  }

  let minNode = function(node) {
    if (node) {
      while(node && node.left !== null){
        node = node.left;
      }
      return node.key;

    }
    return null;
  }
  
  // 최대
  this.max = function() {
    return maxNode(root);
  }
  let maxNode = function(node) {
    if (node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.key;

    }
    return null;
  }

  this.search = function(key) {
    return searchNode(root, key);
  }
  // searchNode
  let searchNode = function(node, key) {
    if (node === null) {
      return false;
    } 
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }
  

}
// 프린트
function printNode(value) {
  console.log(value);
}
let tree = new BinarySearchTree();

let nodeList = [3,5,7,14,6,9,43,38,31,152,69,79,53,1];

for (let i = 0; i < nodeList.length; i++) {
  tree.insert(nodeList[i]);
}

console.log(tree.search(152) ? 'true' : 'false');
