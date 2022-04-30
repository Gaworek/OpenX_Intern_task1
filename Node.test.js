const { Node } = require("./Node.js")

test('Are nodes correctly checked to be leafs', () => { 
    let node = new Node()
    node.leftNode = new Node()
    expect(node.isLeaf()).toBe(false)
    expect(node.leftNode.isLeaf()).toBe(true)

    node = new Node();
    expect(node.isLeaf()).toBe(true)
 })
