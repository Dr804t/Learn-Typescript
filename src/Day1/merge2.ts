/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j: number = 0, k: number = 0;
    let tempnums1 : number[] = nums1;
    let min = 0;
    for (let i = 0 ; i < m+n ; i++)
    {
        if(j >= m) {min = nums2[k]}
        else if (k >= n) {min = tempnums1[j]}
        else {min = Math.min(tempnums1[j],nums2[k])}
        
        nums1[i] = min
        console.log (`j : ${j}, k : ${k}, min : ${min}`);
        if(min === tempnums1[j])
        {
            j++;
        }
        else if (min === nums2[k])
        {
            k++
        }
    }

};


let nums1: number[] = [1,2,3,0,0,0]
let nums2: number[] = [2,5,6]
merge(nums1,3,nums2,3);