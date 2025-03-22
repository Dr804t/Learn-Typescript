
// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;
    const traverse = (r: TreeNode | null): number => {
        if(r === null) return 0;
        let left = traverse(r.left)
        let right = traverse(r.right)
        return Math.max(left,right)+1
        }
    return traverse(root)
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

    if(root === null) return 0;

    let depth = 1;
    const traverse = (r: TreeNode, d: number): number => {
        if(r.left !== null && r.right !== null) d = Math.max(traverse(r.left,d+1),traverse(r.right,d+1));
        else{
            if(r.left !== null)
            {
                d = traverse(r.left,d+1)
            }
            
            if(r.right !== null)
            {
                d = traverse(r.right,d+1)
            }
            //console.log(`root : ${r.val} d : ${d}`)

        } 
        return d
    }

    depth = traverse(root,1);

    return depth
};