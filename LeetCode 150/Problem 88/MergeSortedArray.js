//Description:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//-----------------------------------------------------------------------------------------------

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

//-----------------------------------------------------------------------------------------------
// Solution:
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j= n-1;
    let k =m+n-1;

    while(j>=0)
    {
        if(i>=0 && nums1[i]>nums2[j])
        {
            nums1[k]= nums1[i];
            k=k-1;
            i=i-1;
        }
        else
        {
            nums1[k]=nums2[j];
            k=k-1;
            j=j-1;
        }
    }
};

//-----------------------------------------------------------------------------------------------
// Solution # 2
// arr1=[7,8,9,0,0,0]
// arr2=[2,5,6]
// m=3
// n=3


// i = m-1
// j = n-1
// k=m+n-1

// while(j>=0)
// {
//     if(i>=0 && arr1[i]>arr2[j])
//     {
//         arr1[k]=arr1[i]
        
//         k=k-1
//         i=i-1;
//     }
//     else
//     {
//         arr1[k]=arr2[j]
//          k=k-1
//         j=j-1;
       
//     }
// }

// console.log(arr1)