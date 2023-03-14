/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function generateBinaryTree(array) {
  if (!array.length) {
    return null;
  }
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid + 1, array.length);
  const root = new TreeNode(array[mid]);

  root.left = generateBinaryTree(leftArray);
  root.right = generateBinaryTree(rightArray);

  return root;
}

function convertListNodeToArray(listNode) {
  let array = [];
  while (listNode) {
    array.push(listNode.val);
    listNode = listNode.next;
  }
  return array;
}

const sortedListToBST = (head) => {
  const array = convertListNodeToArray(head);
  return generateBinaryTree(array);
};