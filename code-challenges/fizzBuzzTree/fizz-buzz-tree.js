class K_aryNode {
  constructor(value) {
    this.value = value || null;
    this.children = [];
  }
}

class K_aryTree {
  constructor(value) {
    this.root = new K_aryNode(value);
  }

  bfs() {
    const collection = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();

      collection.push(current.value);

      if (current.children.length) {
        current.children.forEach((node) => {
          queue.push(node);
        });
      }
    }
    return collection;
  }

  // should return new tree
  fizzBuzzTree() {
    const newTree = new K_aryTree();
    // newTree.root = { ...this.root }; // did not deep clone
    // newTree.root = Object.assign({}, this.root); // did not deep clone
    newTree.root = JSON.parse(JSON.stringify(this.root));
    const queue = [];
    queue.push(newTree.root);

    while (queue.length) {
      let current = queue.shift();

      if (current.value % 3 === 0 && current.value % 5 === 0) {
        current.value = 'FizzBuzz';
      } else if (current.value % 3 === 0) {
        current.value = 'Fizz';
      } else if (current.value % 5 === 0) {
        current.value = 'Buzz';
      } else {
        current.value = `${current.value}`;
      }

      if (current.children.length) {
        current.children.forEach((node) => {
          queue.push(node);
        });
      }
    }
    // console.log('original', this.root);
    // console.log('NEW', newTree.root);
    return newTree;
  }
}

// bfs
// [50, 30, 70, -10, 33, 12, 21, 55, 7, 63, 100, -22, 111, 43]

const tree = new K_aryTree(50);

const levelOne1 = new K_aryNode(30);
const levelOne2 = new K_aryNode(70);
const levelOne3 = new K_aryNode(-10);
const levelOne4 = new K_aryNode(33);

const levelTwo1 = new K_aryNode(12);
const levelTwo2 = new K_aryNode(21);
const levelTwo3 = new K_aryNode(55);
const levelTwo4 = new K_aryNode(7);
const levelTwo5 = new K_aryNode(63);
const levelTwo6 = new K_aryNode(100);

const levelThree1 = new K_aryNode(-22);
const levelThree2 = new K_aryNode(111);
const levelThree3 = new K_aryNode(43);

// root's children
tree.root.children[0] = levelOne1;
tree.root.children[1] = levelOne2;
tree.root.children[2] = levelOne3;
tree.root.children[3] = levelOne4;

// levelOne's children
levelOne1.children[0] = levelTwo1;
levelOne1.children[1] = levelTwo2;
//
levelOne3.children[0] = levelTwo3;
//
levelOne4.children[0] = levelTwo4;
levelOne4.children[1] = levelTwo5;
levelOne4.children[2] = levelTwo6;

// levelTwo's children
levelTwo1.children[0] = levelThree1;
levelTwo1.children[1] = levelThree2;
//
levelTwo6.children[0] = levelThree3;

const newTree = tree.fizzBuzzTree();
console.log(tree.bfs());
console.log(newTree.bfs());
