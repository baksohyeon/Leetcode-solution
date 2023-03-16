/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  // postorder 의 가장 마지막을 찾는다. = 뿌리 노드
  // inorder 에서 그 값에 해당하는 index 를 찾는다. (이진트리는 중복 값 허용 안함)
  // 그 기준으로 right, left 배열을 쪼갠다.
  // postorder 다음 마지막

  if (!inorder.length) {
    return null;
  }

  // const currentVal = postorder[postorder.length - 1];
  const currentVal = postorder.pop();
  const splitIndex = inorder.indexOf(currentVal);

  const treeNode = new TreeNode(currentVal);
  treeNode.left = buildTree(
    inorder.slice(0, splitIndex),
    postorder.slice(0, splitIndex)
  );
  treeNode.right = buildTree(
    inorder.slice(splitIndex + 1),
    postorder.slice(splitIndex)
  );
  return treeNode;
};