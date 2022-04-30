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

class BinaryTree {

    constructor(rootNode) {
        this.root = rootNode || new Node();
    }
    

    printInOrder() {
        printUtil(this.root);

        function printUtil(node) {
            if(!node)
                return;
            
            printUtil(node.leftNode);

            console.log(node.value);

            printUtil(node.rightNode);
        }
    }

    calculateLeafs(shouldPrint = false) {
        let numberOfLeafs = 0;

        calcUtil(this.root, shouldPrint);

        return numberOfLeafs;

        function calcUtil(node) {
            if(node.isLeaf()){
                numberOfLeafs++;
                if(shouldPrint)
                    console.log(node.value);
                return;
            }
            if(node.leftNode)
                calcUtil(node.leftNode);

            if(node.rightNode)
                calcUtil(node.rightNode);


        }
        
    }

    calculateMaxEdge() {
        let maxNumOfEdges = 0;

        edgesUtil(this.root, 0)

        return maxNumOfEdges;

        function edgesUtil(node, currentNumOfEdges) {
            if(currentNumOfEdges > maxNumOfEdges)
                maxNumOfEdges = currentNumOfEdges

            if(node.leftNode)
                edgesUtil(node.leftNode, currentNumOfEdges + 1)
            
            if(node.rightNode)
                edgesUtil(node.rightNode, currentNumOfEdges + 1)
        }
    }


    isEqual(otherTree) {
        let answer = true;

        equalUtil(this.root, otherTree.root);

        return answer;

        function equalUtil(firstTreeNode, secondTreeNode) {
            if(answer === false)
                return;
            if(firstTreeNode.value !== secondTreeNode.value || !firstTreeNode.hasStuctureLike(secondTreeNode))
            {
                return answer = false;
            }
            if(firstTreeNode.leftNode && secondTreeNode.leftNode)
                equalUtil(firstTreeNode.leftNode, secondTreeNode.leftNode)
            if(firstTreeNode.rightNode && secondTreeNode.rightNode)
                equalUtil(firstTreeNode.rightNode, secondTreeNode.rightNode)
        }
    }

}

module.exports = {Node, BinaryTree}