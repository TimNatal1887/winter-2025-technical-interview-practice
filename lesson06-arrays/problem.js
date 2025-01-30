// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The index of the largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
    if(nums.length < 1) return -1;

    const largestNum = Math.max(...nums);  
    const numsWithoutLargest = nums.filter((num)=> num !== largestNum);
    const secondLargest = Math.max(...numsWithoutLargest);
    
    if(largestNum >= 2 * secondLargest){
      return largestNum
    }
    
    return -1
}
module.exports = checkLargestElement;
