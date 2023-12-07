// Description
    // Given an array nums of size n, return the majority element.
    // The majority element is the element that appears more than ⌊n / 2⌋ times. 
    // You may assume that the majority element always exists in the array.
//---------------------------------------------------------------------------------------------------------------- 
// Example 1:
    // Input: nums = [3,2,3]
    // Output: 3

// Example 2:
    // Input: nums = [2,2,1,1,1,2,2]
    // Output: 2
//----------------------------------------------------------------------------------------------------------------
// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */

// Note 
    // For this problem there are some possible Solution (But I have used Moore's Voting Algorithm)
        // 1. Hashmap              2. Moore's Voting Algorithm            3. n/2 method(a number occure more than half of the array size)
//----------------------------------------------------------------------------------------------------------------

    var majorityElement = function(nums) {
    let candidate=0, points=0;

    for(let i =0; i<nums.length; i++)
    {
        if(points === 0)
        {
                candidate = nums[i]
        }

        if(candidate === nums[i])
        {
            points++
        }
        else
        {
            points--
        }
    }
    return candidate
    
};
