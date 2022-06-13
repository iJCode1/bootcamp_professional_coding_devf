class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Funciones a implementar
  // insert(data)
  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.rigth === null) {
        node.rigth = newNode;
      } else {
        this.insertNode(node.rigth, newNode);
      }
    }
  }

  // remove(data)
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.rigth = this.removeNode(node.rigth, data);
      return node;
    } else {
      if (node.rigth === null && node.left === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.rigth;
        return node;
      } else if (node.rigth === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.rigth);
      node.data = aux.data;

      node.rigth = this.removeNode(node.rigth, aux.data);
      return node;
    }
  }

  // Funciones de ayuda

  // findMinNode()
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      this.findMinNode(node.left);
    }
  }

  // getRootNode()
  getRootNode() {
    return this.root;
  }

  // search(node, data)
  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.rigth, data);
    } else {
      return node;
    }
  }

  // inorder(node)
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.rigth);
    }
  }

  // preorder(node)
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.rigth);
    }
  }

  // postorder(node)
  postorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.inorder(node.rigth);
      console.log(node.data);
    }
  }
}