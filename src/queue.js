class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // create a node with the data you want to ADD to queue
    const node = new _Node(data);
    // if queue is empty, make the node the FIRST node in the queue
    if (this.first === null) {
      this.first = node;
    }
    // if there is something in the queue, then take the node that is at the end of the queue and link it to the new node
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    // if queue is empty, there is nothing to remove
    if (this.first === null) {
      return;
    }

    // Make the first item in the queue to be the item that is the new first
    const node = this.first;
    this.first = this.first.next;

    // check if this is the last item
    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  peek() {
    if (this.first === null) {
      return null;
    }
    return this.first.value;
  }
}
