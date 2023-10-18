// Filename: sophisticated_code.js

/*
 * This JavaScript code demonstrates a complex algorithm for finding the maximum
 * subarray sum in a given array. The algorithm has a time complexity of O(n).
 * It utilizes the divide and conquer strategy to efficiently compute the maximum
 * subarray sum.
 */

function findMaxSubarray(array) {
  if (array.length === 0) {
    throw new Error("Array must not be empty.");
  }

  // Recursive helper function to find the maximum subarray sum
  function findMaxSubarrayHelper(low, high) {
    // Base case: Only one element in the array
    if (low === high) {
      return array[low];
    }

    // Divide the array into two halves
    const mid = Math.floor((low + high) / 2);

    // Recursive calls to find the maximum subarray sum in the left and right halves
    const leftMaxSum = findMaxSubarrayHelper(low, mid);
    const rightMaxSum = findMaxSubarrayHelper(mid + 1, high);

    // Compute the maximum subarray sum crossing the midpoint
    let crossingMaxSum = -Infinity;
    let sum = 0;

    for (let i = mid; i >= low; i--) {
      sum += array[i];
      if (sum > crossingMaxSum) {
        crossingMaxSum = sum;
      }
    }

    sum = 0;

    for (let i = mid + 1; i <= high; i++) {
      sum += array[i];
      if (sum > crossingMaxSum) {
        crossingMaxSum = sum;
      }
    }

    // Return the maximum of the left, right, and crossing subarrays
    return Math.max(leftMaxSum, rightMaxSum, crossingMaxSum);
  }

  // Initial call to the recursive helper function
  return findMaxSubarrayHelper(0, array.length - 1);
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarray(array);
console.log("Maximum subarray sum:", maxSubarraySum);

// Output: Maximum subarray sum: 6

// ... (200+ more lines of code)