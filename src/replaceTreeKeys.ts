interface Node {
  [key: string]: any;
}

type Tree = Node | Node[];

interface KeyMap {
  [oldKey: string]: string;
}

function replaceTreeKeys(tree: Tree, keyMap: KeyMap): Tree {
  if (Array.isArray(tree)) {
    return tree.map(node => replaceNodeKeys(node, keyMap));
  }

  return replaceNodeKeys(tree, keyMap);
}

function replaceNodeKeys(node: Node, keyMap: KeyMap): Node {
  const newNode = { ...node };

  for (let oldKey in keyMap) {
    newNode[keyMap[oldKey]] = node[oldKey];
    delete newNode[oldKey];
  }

  if (node.children) {
    newNode.children = node.children.map((child: Tree) =>
      replaceTreeKeys(child, keyMap)
    );
  }

  return newNode;
}

export { replaceTreeKeys };
