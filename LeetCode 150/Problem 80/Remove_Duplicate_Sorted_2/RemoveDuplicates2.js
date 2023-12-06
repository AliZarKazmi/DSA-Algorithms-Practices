// Description
    // Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

    // Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    // Return k after placing the final result in the first k slots of nums.

    // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example:
    // Input: nums = [0,0,1,1,1,1,2,3,3]
    // Output: 7, nums = [0,0,1,1,2,3,3,_,_]
    // Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
    // It does not matter what you leave beyond the returned k (hence they are underscores).
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let count = 2; // Start from the third element
        for (let i = 2; i < nums.length; i++) {
            if (nums[i] !== nums[count - 2]) {
                nums[count] = nums[i];
                count++;
            }
        }
    
        return count;
    };

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let nums = [0,0,1,1,1,2,3,3]

// if (nums.length <= 2)
//     {
//         return nums.length;
//     }        
 
// let count = 2; 

// for (let i = 2; i < nums.length; i++)
//     {
//         if (nums[i] !== nums[count - 2])
//         {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
// console.log(nums)
// console.log(count)