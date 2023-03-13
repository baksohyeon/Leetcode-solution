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

function generateRootAndBranch(array) {
  // 배열이 비었을 경우 재귀 멈춤
  if (!array.length) return null;

  // 가운데 값 구함
  const mid = Math.round((array.length - 1) / 2);

  // 트리 노드로 만듬
  const root = new TreeNode(array[mid]);

  // 왼쪽 분리
  const leftArray = array.slice(0, mid);
  if (leftArray.length) {
    // 왼쪽 그룹끼리 재귀 잘 되길 기도
    root.left = generateRootAndBranch(leftArray);
  }

  // 오른쪽 분리
  const rightArray = array.slice(mid + 1);
  if (rightArray.length) {
    // 오른쪽 그룹끼리 재귀 잘 되길 기도
    root.right = generateRootAndBranch(rightArray);
  }
  return root;
}

function convertListToArray(head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}

const sortedListToBST = (head) => {
  if (!head) return null;
  const array = convertListToArray(head);
  const root = generateRootAndBranch(array);
  return root;
};