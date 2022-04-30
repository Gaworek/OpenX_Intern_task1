class Node {

    constructor(value, leftNode, rightNode) {
        this.value = value || 0;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

    isLeaf() {
        if( !this.leftNode && !this.rightNode )
            return true
        return false
    }

    hasStuctureLike(secondNode) {
        if(this.leftNode && !secondNode.leftNode)
            return false

        if(!this.leftNode && secondNode.leftNode)
            return false

        if(this.rightNode && !secondNode.rightNode)
            return false

        if(!this.rightNode && secondNode.rightNode)
            return false

        return true
    }
}

module.exports = { Node }