// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(arr, num) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            sum += arr[i];
        }
    }
    return sum;
    
}

console.log(myFunction([78, 99, 100, 101, 401], 99));