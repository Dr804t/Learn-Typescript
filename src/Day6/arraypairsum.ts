function arrayPairSum(nums: number[]): number {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);
    console.log(nums);
    // Step 2: Initialize the sum
    let sum = 0;

    // Step 3: Add numbers at even indices
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    // Step 4: Return the result
    return sum;
}

// Example Usage
console.log(arrayPairSum([1, 4, 3, 2])); // Output: 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // Output: 9