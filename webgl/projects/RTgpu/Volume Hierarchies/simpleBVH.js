class BVHTree {



    constructor( primitives ) {
        this.axis = 0;
        var BVHPrimitives = [];
        
        for(var i = 0, l = primitives.length; i < l; i++) {
            BVHPrimitives.push({
                primitiveIndex: i,
                AABB: primitives[i].getAABB()
            });
        }

        this.rootNode = this.buildTreeRecursive(BVHPrimitives);
        

        this.ltree = [];
        this.ltreeCounter = 0;
        this.flattenTree( this.rootNode, -1, false );
    }



    buildTreeRecursive( BVHPrimitives ) {

        // construct leaf BVHNode
        if( BVHPrimitives.length == 1 ) {
            return new BVHNode(BVHPrimitives[0], BVHPrimitives[0], BVHPrimitives[0].AABB, true);
        }
        if( BVHPrimitives.length == 2 ) {
            var leafAABB  = new AABB(BVHPrimitives[0].AABB.c0, BVHPrimitives[0].AABB.c1);
            leafAABB.union(BVHPrimitives[1].AABB.c0, BVHPrimitives[1].AABB.c1);

            return new BVHNode(BVHPrimitives[0], BVHPrimitives[1], leafAABB, true);
        }




        // choose a random axis
        // var axis = Math.floor(Math.random() * 3);
        // we're probably better off by varying the split axis at each iteration
        var axis = this.axis++ % 3;

        // order those meshes along that axis
        BVHPrimitives.sort(function(a, b) {
            
            if(a.AABB.c0.a[axis] - b.AABB.c0.a[axis] < 0) return -1;
            return 1;
        
        });


        // now they're ordered, construct left and right BVHNodes for this BVHNode
        var splittingIndex = Math.floor(BVHPrimitives.length / 2);
        var leftBVHPrimitives  = BVHPrimitives.slice(0, splittingIndex);
        var rightBVHPrimitives = BVHPrimitives.slice(splittingIndex);
        var left  = this.buildTreeRecursive( leftBVHPrimitives );
        var right = this.buildTreeRecursive( rightBVHPrimitives );
        
        var nodeAABB  = new AABB(left.AABB.c0, left.AABB.c1);
        nodeAABB.union(right.AABB.c0, right.AABB.c1);

        return new BVHNode(left, right, nodeAABB, false); 
    }



    
    // this function is also recursive
    flattenTree( node, parentIndex, hasSiblings ) {
        //as soon as I enter, I'll push the node in the flattened array and 
        this.ltree.push(new linearBVHNode(node, parentIndex));
        // save the parent node index here
        var currentLBVHnodeIndex = this.ltree.length - 1;

        if(node.leaf) {
            // the left branch may be a leaf and the right branch may be an internal node
            if(hasSiblings)
                this.ltree[currentLBVHnodeIndex].siblingIndex = this.ltree.length;

            return;
        }

        // if it has childs and it's not a leaf
        if(!node.leaf) {
            this.flattenTree(node.left,  currentLBVHnodeIndex, true);
            this.flattenTree(node.right, currentLBVHnodeIndex, false);

            if(hasSiblings)
                this.ltree[currentLBVHnodeIndex].siblingIndex = this.ltree.length;
        }
    }
}


class BVHNode {
    constructor(left, right, AABB, leaf) {
        this.left  = left;
        this.right = right;

        this.AABB  = AABB;
        
        this.leaf  = leaf;
    }
}


class linearBVHNode {
    constructor( node, parentIndex, siblingIndex ) {
        this.node = node;
        this.parentIndex  = parentIndex;
        this.siblingIndex = siblingIndex || -1;
    }
}


