// #210

// let n = 155;
// let a = 2;

// let n = 1254;
// let a = 16;

// console.log(n.toString(a));


// #211

// let a = "JS😉";
// let b = "C++👍";
// let c = "Py🐍on";

// function getSatr(satr) {
//     return satr.split('');
// }
// console.log(getSatr(a));

// #214

let arr = [1,2,2,1]
let arr2 =[1,2,2,2]

let palindromeArray = (arr) => {
  
     return isPalindrome(arr);
    
}
function isPalindrome(arr) {
    let isPalindromeNumber = true

    for(let i = 0; i < arr.length / 2; i++) {

        if(arr[i] !== arr[arr.length - i - 1]){
            isPalindromeNumber = false; 
          break;
        }
    }
    
    return isPalindromeNumber;
}

console.log(palindromeArray(arr));
console.log(palindromeArray(arr2));





