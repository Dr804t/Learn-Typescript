function findDisappearedNumbers(nums: number[]): number[] {
    // Mark numbers as seen\
    nums.forEach((val) => {
        let i = Math.abs(val) - 1;
        if (nums[i] > 0) {
            nums[i] = -nums[i];
        }
    });

    // Find missing numbers
    let result: number[] = [];
    nums.forEach((val, index) => {
        if (val > 0) {
            result.push(index + 1);
        }
    });

    return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]