// Q1 Return the Sum of Two numbers
//     create a function that takes two arguments as functions and return their Sum

//     addition (3,2) -> 5
//     addition(-3, -6) -> -9
//     addition(7, 3) -> 10

    // SOLVING
// function addition(num1, num2) {
//     return num1 + num2
// }
//     console.log(addition(3, 5));

// Q2 Convert hours into seconds
//     create a function that converts hours into seconds

//     hoursIntoSeconds(2) -> 7200
//     hoursIntoSeconds(10) -> 36000
//     hoursIntoSeconds(24) -> 86400

//     SOLVING
// function hoursIntoSeconds(hour) {
//     return hour * 60 * 60;
// }

// console.log(hoursIntoSeconds(2))

// Q3 Calculate the Perimeter of a Rectangle
//     Create a function that takes length and width of a rectangle and return its Perimeter

//     calcPerimeter(6,7) -> 26
//     calcPerimeter(20,10) -> 60
//     calcPerimeter(2,9) -> 22

//     SOLVING
// function calcPerimeter(length, width) {
//     return (length * 2) + (width * 2);
// }

// console.log(calcPerimeter(6,7))

// Q4 Calculate the area of a triangle
//     Write a function that takes the base and height of a triangle and return its area

//     calcTriangleArea(3,2) -> 3
//     calctriangleArea(10,10) - > 50
//     calctriangleArea(20,20) - > 200

    // SOLVING
// function calcTriangleArea(base, height) {
//     return 0.5 * base * height;
// }

// console.log(calcTriangleArea(20,20))

// Q5 Extend a String
//     Write a function accepts a string and adds 'frontend' onto the end of instanceof

//     appendFrontend('Apple') -> "AppleFrontend"
//     appendFrontend('Banana') -> "BananaFrontend"
//     appendFrontend('Orange') -> "OrangeFrontend"

//     SOLVING
// function appendFrontend(string) {
//     return string + 'Frontend'
// }

// console.log(appendFrontend('Apple'))

// Q6 Greater than 100
//     Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false. 

//     sumGreaterThan100(20, 10) -> false
//     sumGreaterThan100(50, 60) -> true
//     sumGreaterThan100(100, -50) -> false

//     SOLVING
// function sumGreaterThan100(num1, num2) {
//     // if (num1 + num2 > 100) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
//     return num1 + num2 > 100
// }

// console.log(sumGreaterThan100(20, 10))

// Q7 Less than or equal to zero
//     Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false

//     lessThanOrEqualToZero(3) -> false
//     lessThanOrEqualToZero(0) -> true
//     lessThanOrEqualToZero(-2) -> true

//      SOLVING
// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }

// console.log(lessThanOrEqualToZero(-2));

// Q8 Opposite Boolean
//     Given a boolean (true or false), return the opposite boolean

//     oppositeBoolean(true) -> false;
//     oppositeBoolean(false) -> true;

//     SOLVING
// function oppositeBoolean (bool) {
//     return !bool;
// }

// console.log(oppositeBoolean(true))

// Q9 Is not the number 0
//     Given ANY Element, return true if it is NOT the number 0

//     isNotZero(5) -> true
//     isNotZero(0) -> False
//     isNotZero(null) -> true

//     SOLVING
// function isNotZero(num) {
//     return num !== 0;
// }

// console.log(isNotZero(5));

// Q10 Calculate the remainder
//     Given two numbers return their remainder when divided by each other

//     calcRemainder(4, 2) -> 0
//     calcRemainder(7, 8) -> 7
//     calcRemainder(9, 8) -> 1

//     SOLVING
// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(9, 8));

// Q11 Is the number odd 
//     given two numbers return true if the number is odd

//     isOdd(1) -> true
//     isOdd(2) -> false
//     isOdd(3) -> true

//     SOLVING
// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isOdd(3));

// Q12 If a number is even, return 1 otherwise return -1
//     create a function that takes a number argument and returns 1 if the number is event. if the number is off return -1

//     booleanInteger(1) -> -1
//     booleanInteger(2) -> 1
//     booleanInteger(5) -> -1

//     SOLVING
// function booleanInteger (num) {
//     return num % 2 === 0 ? 1 : -1;
// }

// console.log(booleanInteger(5));

// Q13 Check if a user is logged in AND subscribed
//     Create a function that takes in two SVGStringList. If the first string is equal to LOGGED IN AND the second string is equal to SUBSCRIBED return true, otherwise return false

//     isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
//     isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
//     isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

//     SOLVING
// function isLoggedInAndSubscribed (log, sub) {
//     return log === 'LOGGED_IN' && sub === 'SUBSCRIBED' ? true : false
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))