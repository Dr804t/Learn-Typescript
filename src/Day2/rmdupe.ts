function removeDuplicates(nums: number[]): number {
  let isdupe = false;
  let prevnum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log(`prevnum : ${prevnum}`);
    if (nums[i] === prevnum) {
      nums.splice(i, 1);
      i--;
    } else {
      prevnum = nums[i];
    }
  }
  console.log(`arr : ${nums}`);
  return nums.length;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5]));
