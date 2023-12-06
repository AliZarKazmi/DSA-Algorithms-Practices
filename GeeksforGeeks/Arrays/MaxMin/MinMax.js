
//Finding Min and Max of Array
let arr = [12, 423, 6, 46, 34, 23, 13, 53, 4]
let max = arr[0]
let min=arr[0]
for(let i=0; i<arr.length; i++)
{
    //max
    if(arr[i]>max)
    {
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]    
    }
}

console.log(max,min)

