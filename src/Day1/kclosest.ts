function kClosest(points: number[][], k: number): number[][] {
    // Calculate the Euclidean distance for each point
    const distances = points.map(([x, y]) => [x, y, x * x + y * y]);
    //console.log(distances);
    // Sort the points based on their distance from the origin
    distances.sort((a, b) => a[2] - b[2]);

    // Return the first k points
    return distances.slice(0, k).map(([x, y]) => [x, y]);
}

// Test the function
const points1 = [[1, 3], [-2, 2]];
const k1 = 1;
console.log(kClosest(points1, k1)); // Output: [[-2, 2]]

// const points2 = [[3, 3], [5, -1], [-2, 4]];
// const k2 = 2;
// console.log(kClosest(points2, k2)); // Output: [[3, 3], [-2, 4]]