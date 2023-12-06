
//reverse an array
let  arr =[4, 5, 1, 2]
let j = arr.length-1
console.log(j)
for(let i=0; i<arr.length;i++)
{
 if(i<j )
 {
     let temp = arr[i]
     arr[i]=arr[j]
     arr[j]=temp;
     j--
 }   
}
console.log(arr)