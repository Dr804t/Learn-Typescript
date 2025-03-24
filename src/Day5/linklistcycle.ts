/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let slownode: ListNode | null = head;
    let fastnode: ListNode | null = head;
    while(fastnode && fastnode.next)
    {
        slownode = slownode.next;
        fastnode = fastnode.next.next;

        if(slownode === fastnode)
        {
            return true
        }
    }
    return false
};