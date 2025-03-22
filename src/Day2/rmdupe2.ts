function removeDuplicates2(nums: number[]): number {
  let prevnum = nums[0];
  let dupe = 0;
  for (let i = 1; i < nums.length; i++) {
    console.log(`prevnum : ${prevnum}`);
    if (nums[i] === prevnum) {
      dupe++;
      if(dupe >= 2)
      {
        nums.splice(i, 1);
        i--;
      }
    } else {
      prevnum = nums[i];
      dupe = 0;
    }
  }
  console.log(`arr : ${nums}`);
  return nums.length;
}

console.log(removeDuplicates2([1, 1, 2, 2, 3, 4, 5]));
