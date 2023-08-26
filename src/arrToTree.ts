type TreeResultItem<T extends Record<any, any>> = {
  id: any;
  parentId: any;
  children: TreeResultItem<T>[];
} & T;

/**
 * 数组转树结构
 * @param arr 需要转化成树结构的扁平化数组,需要包含id和parentId
 * @param rootId 最高级的parentId
 * @returns
 */
export function arrToTree<T extends { id: any; parentId: any }>(arr: T[], rootId: number | null = null): TreeResultItem<T>[] {
  const tree: TreeResultItem<T>[] = [];
  const hashTable: Record<any, TreeResultItem<T>> = {};

  arr.forEach(node => {
    hashTable[node.id] = { ...node, children: [] };
  });

  arr.forEach(node => {
    if (node.parentId === rootId) {
      hashTable[node.parentId].children.push(hashTable[node.id]);
    } else {
      tree.push(hashTable[node.id]);
    }
  });

  return tree;
}
