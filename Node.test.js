const { Node } = require("./Node.js")

test('Are nodes correctly checked to be leafs', () => { 
    let node = new Node()
    node.leftNode = new Node()
    expect(node.isLeaf()).toBe(false)
    expect(node.leftNode.isLeaf()).toBe(true)

    node = new Node();
    expect(node.isLeaf()).toBe(true)
 })


 test('Are nodes correctly checked to have the same structure', () => { 
     let node = new Node()
     let secondNode = new Node()

     expect(node.hasStuctureLike(secondNode)).toBe(true);

     node.leftNode = new Node()
     node.rightNode = new Node()

     secondNode.leftNode = new Node()
     secondNode.rightNode = new Node()

     expect(secondNode.hasStuctureLike(node)).toBe(true);

     secondNode.leftNode = null

     expect(node.hasStuctureLike(secondNode)).toBe(false);

     node.rightNode = null

     expect(node.hasStuctureLike(secondNode)).toBe(false);
     
  })
