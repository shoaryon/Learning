// Q1 Falsy or Truthy
//     Given two values, return the first one if it is falsy, otherwise return the second one

//     filterOutFalsy(0,500) -> 0
//     filterOutFalsy(false, 100) -> false
//     filterOutFalsy([true, 'Dog']) -> 'Dog'

//     SOLVING
// function filterOutFalsy (elem1, elem2) {
//     return !elem1 ? elem1 : elem2 
// }

// console.log(filterOutFalsy(true, 'Dog'))

// Q2 Return thelength of any given Array
//     Given an Array, return its length

//     arrLength([1,2,3]) -> 3
//     arrLength([5, 0, -4, 1]) -> 4
//     arrLength([]) -> 0

//     SOLVING
// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 2, 3]));

// Q3 Get the last element in an Array
//     given an Array, return the first element

//     lastElem([3, 2, 0, 6, 2]) -> 2
//     lastElem(['dog', 'cat', 'ball']) -> 'bacll'
//     lastElem([null, 5, false]) -> false

//     SOLVING
// function lastElem(arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastElem([null, 5, false]))

// Q4 Find the sum of an Array
//     given an Array, return the sum of every Element

//     arrSum([2, 2, 2]) -> 6
//     arrSum([100, 200, 500]) -> 800
//     arrSum([0, -5, -10]) -> -15

//     SOLVING
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([0, -5, -10]));

// Q5 Add up the numbers from a single numbers
//     Given a number, add up all the numbers from one to the number that is given.
//     Eg. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10

//     progressiveSum(3) -> 6
//     progressiveSum(4) -> 10
//     progressiveSum(600) -> 180300

//     SOLVING
// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//             sum = sum + i;
//     }
//     return sum;
// }

// console.log(progressiveSum(3))

// Q6 calculate the Time 
//     Given a number in seconds, return this number in mm:ss Format 

//     calcTime(66) -> '01:06'
//     calcTime(50) -> '00:50'
//     calcTime(300) -> '05:00'

//     SOLVING
// function calcTime(sec) {
//     let timerMinutes = Math.floor(sec / 60);
//     let timerSeconds = sec % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = '0' + timerSeconds
//     }

//     return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(61))

// Q7 Find the largest Number
//     Given an array of Number, return the largest number of that array

//     getMax([5, 100, 0]) -> 100
//     getMax([12, 10, -20]) -> 12
//     getMax([-300, -100, -200]) -> -100

//     SOLVING
// function getMax(arr) {
//     let maxNum = arr[0]
//    for (i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i]
//         }
//     }
//     return maxNum
// };

// console.log(getMax([-300, -100, -200]))

// Q8 Reverse a String
//     given a String, return the reversed String

//     reverseString('abc') -> 'cba'
//     reverseString('David') -> 'divaD'
//     reverseString('This is Cool') -> 'looc si sihT'

//     SOLVING
// function reverseString(str) {
//     let reversedString = '';
//     // for (i = 0; i < str.length; i++) {
//     //     reversedString = str[i] +reversedString;
//     // }
//     // return reversedString;

//     // for (let i =str.length - 1; i >= 0; i--) {
//     //     reversedString += str[i];
//     // }
//     // return reversedString;

//     // return str.split('').reverse().join('')
// }

// console.log(reverseString('David'))

