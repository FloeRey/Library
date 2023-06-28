export class BinaryTree<T> {
  constructor(public readonly value: T, public readonly left?: BinaryTree<T>, public readonly right?: BinaryTree<T>) { }
}

export function depthFirstTraversal<T>(tree: BinaryTree<T> | undefined, callback: (value: T) => void) {
  if (!tree) {
    return;
  }

  callback(tree.value);
  depthFirstTraversal(tree.left, callback);
  depthFirstTraversal(tree.right, callback);
}

export function breadthFirstTraversal<T>(tree: BinaryTree<T>, callback: (value: T) => void) {
  const queue: BinaryTree<T>[] = [tree];
  while (queue.length > 0) {
    const node = queue.shift()!;
    callback(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}
