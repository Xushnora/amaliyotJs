//  #217 problem

// function showMessage(a) {
//     if(a % 2 == 1) {
//         return "Toq";
//     } else {
//         return "Juft";
//     }
// }
// function oddOrEven(n) {
//     console.log(showMessage(n));
// }

// oddOrEven(10);

// #216 problem

// function min(arr) {
//     let count = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(count > arr[i]) {
//             count = arr[i];
//         }
//     }
//     return count;
// }

// console.log(min([10, 3, 15, 4, 5]));

// let arr = [10, 3, 15, 4, 5];

// let arr1 = arr[0];
// let arrLength = arr[arr.length-1];

// console.log(arr1, arrLength);

// for(let i = 0; i < arr.length; i++) {
    
// }

// Problem #215

// function newSort(arr){
//     let len = arr.length;
//     for (let i = len-1; i>=0; i--){
//       for(let j = 1; j<=i; j++){
//         if(arr[j-1]>arr[j]){
//             let temp = arr[j-1];
//             arr[j-1] = arr[j];
//             arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//  }
        
//  console.log(newSort([7,5,2,4,3,9]));

// Problem #218

// console.log([[0, 1], 2, 5, [2, 3], 10, [4, 5]].join().split(','));

let arrays = [1, 2, 3, [1, 2], 34, 12];

// const merge = sort(arrays)
// console.log(merge);

// function sort(array, newArray=[]){
//     for (const el of array) {
//         if(typeof el == 'object') sort(el, newArray)
//         else newArray.push(el)
//     }
//     return newArray
// }


// Problem #209

// const word = 'it is my birthday, i -am 19.';
// const word = 'Belgilar soni: 19 ta';
const word = 'Bu satrda raqam yoq';


// const number = sortNumber(word)
// console.log(number);

// function sortNumber(word){
//     let result = '', minus = false
//     for (const letter of word) {
//         if( !isNaN(+letter) ){
//             console.log(letter);
//             result += letter
//         }
//         if(letter == '-') minus=true
//     }
//     return minus==false ? +result : -Math.abs(+result);
// }




// function kopaytir(number, i=1, result=1){
//     if(i==number+1) {
//         return result
//     }
//     else {
//         result = result * i
//         i++
//         kopaytir(number, i, result)
//     }
// }
// console.log(kopaytir(5));


