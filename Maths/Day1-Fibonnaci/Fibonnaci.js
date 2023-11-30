
console.log("**** Fibonnaci Series *******");

//                              Solution # 1
// --------------------------------------------------------------------

function fibonnaci(n)
{
    const fib = [0,1]; //created an array which has 2 values 
    for (let i=2; i<n ; i++)
    {
        fib[i] = fib[i-1] + fib[i-2]; //adding the new updated values in array
    }
    return fib //an array 
}

console.log(fibonnaci(3));
console.log(fibonnaci(2));
console.log(fibonnaci(7))


//                                 Solution #2 
// --------------------------------------------------------------------

    // sum 0+1
    // then swap value
    // check sum value in the loop 

const value = 7;

let x = 0;
let y = 1;

let sum = x+y;

console.log(x);

while(sum<value)
{
    console.log(sum)
    x=y;
    y=sum;
    sum=x+y
}

// --------------------------------------------------------------------