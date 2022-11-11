// Q1 Show rating
//     Given a rating, display a star (*) for each rating and a full-stop (.) for each half rating

//     showRating(3) -> "***"
//     showRating(4.5) -> "****."
//     showRating(0.5) -> "."

//     SOLVING
// function showRating(rating) {
//     //initialize an empty string

//         // loop through the rounded down rating

//         // add a star for every iteration

//         //if its not the last iteration add a space

//     //if the number is not an integer

//         // add a full stop

//     //return it

//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); i++) {
//         ratings += "*"
//         if (i !== Math.floor(rating) - 1) {
//         ratings += " "
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += " .";
//     }
//     return ratings;
// }

// console.log(showRating(3.5));

// Q2 Sort by lowest to highest Price
//     Given an array of numbers, return the prices sorted by low to highest

//     sortLowToHigh([20,40,10,30,50,10]) -> [10, 10, 20, 30, 40, 50]
//     sortLowToHigh([5, 0, 9, -5]) -> [-5, 0, 5, 10]
//     sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]

//     SOLVING
// function sortLowToHigh(arr) {
//         return arr.sort((a, b) => a-b)
// }

// console.log(sortLowToHigh([3, 2, 1, 0]))

// Q3 Sort by highest to lowest price 
//     Given an array of objects, return the prices sorted by high to low

//     sortHighToLow([
//         { id: 1, price: 50},
//         { id: 2, price: 30},
//         { id: 3, price: 60},
//         { id: 4, price: 10},
//     ])
//     -> [{ id: 3, price: 60},
//         { id: 1, price: 50},
//         { id: 2, price: 30},
//         { id: 4, price: 10}]

//         SOLVING
// function sortHighToLow(arr) {
//         return arr.sort((a, b) => b.price - a.price);
// }

// console.log(sortHighToLow(
//             [{ id: 1, price: 50},
//             { id: 2, price: 30},
//             { id: 3, price: 60},
//             { id: 4, price: 10}]
//             ))

// Q4 Promises
//     On Youtube, watch:

//     "The Async Await Episode I Promised"
//         -Fireship
//     "Async Await JavaScript ES7"
//         -Techsith (1.5x Speed)
//     "Async JS Crash Course - Callbacks, Promises, Async Await"
//         - Travery Media (1.5x Speed)

// No longer necessary -- all covered in PROMISES lesson

// Q5 Find all the posts by a single user 
//     Call the SPI "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id 

//     postsByUser(4) -> ALL THEIR posts

//     SOLVING


// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await promise.json();

//     const posts = result.filter(element => element.userId === userId);

//     console.log(posts)
// }


// postsByUser(4);

// Q6 First 6 Incomplete Todos
//     Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result

//     firstSixIncomplete() -> ALL THE TODOS THAT ARE Incomplete

//     SOLVING
// async function firstSixIncomplete(completed) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const result = await promise.json();
    
//     const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);

//     console.log(incompleteTasks)
// }

// firstSixIncomplete(6)