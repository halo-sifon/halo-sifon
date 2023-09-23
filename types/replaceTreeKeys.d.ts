interface Node {
    [key: string]: any;
}
type Tree = Node | Node[];
interface KeyMap {
    [oldKey: string]: string;
}
declare function replaceTreeKeys(tree: Tree, keyMap: KeyMap): Tree;
export { replaceTreeKeys };
