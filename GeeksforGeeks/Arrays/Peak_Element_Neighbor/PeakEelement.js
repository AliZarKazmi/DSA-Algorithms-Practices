// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

// Note: If the array is increasing then just print the last element will be the maximum value.

// Example:

// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

let num= [1, 3, 20, 4, 1, 0]

for (let i=1 ; i<num.length ; i++)
{
    if(num[i-1]<num[i] && num[i+1]<num[i])
    {
        console.log(`Peak Value: ${num[i]} ,Index ${i} , Right Neighbor :${num[i-1]}, Left Neighbor :${num[i+1]} `)
    }
}
