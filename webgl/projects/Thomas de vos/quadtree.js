function generateQuadtree(vertices, x1, y1, x2, y2) {
    var stack = [];
    var rootNode = new Node(vertices, 0, x1, x2, y1, y2);

    stack.push(rootNode);

    while(stack.length > 0) {

    }
}






function Node (vertices, depth, x1, x2, y1, y2) {
    this.vertices = vertices;
    this.nChildren = vertices.length / 4;
    this.depth = 0;
    this.empty = vertices === undefined ? true : false;

    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
}