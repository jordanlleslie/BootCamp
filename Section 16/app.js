// const dayOfWeek = "Saturday";

// if(dayOfWeek === "Monday"){
//     console.log("I hate Mondays");
// } else if(dayOfWeek === "Saturday"){
//     console.log("I love Saturdays")
// }

// const age = 2;
// let price;

// if(age < 5){
//     price = 'free';
// } else if(age < 10){
//     price = 10;
// } else if(age < 65){
//     price = 20;
// } else if(age >= 65){
//     price = 10;
// }

// console.log("Price: " + price);

// const day = 6;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid");
// }

// for (let i = 0; i<10; i++){
//     console.log(i+1);
// }

// const nums = [1,1,1,1,1,1,1,1,1,1];

// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

// for(let i=0; i<10; i++){
//     for(let j=0; j<3; j++){
//         console.log(i);
//     }
// }

// const maxNumber = parseInt(prompt("Enter max number:"));
// const key = Math.floor(Math.random * maxNumber) + 1;
// let guesses = 0;

// let msg = `Guess a number between 1 and ${maxNumber}:`;

// while (true) {
//     let userInput = prompt(msg);
//     if (userInput === "q") break;
//     else {
//         userInput = parseInt(userInput);
//         if (userInput === key) {
//             break;
//         } else if (userInput < key){
//             msg = "Too low. Guess higher.";
//         } else if (userInput > key){
//             msg = "Too high. Guess lower.";
//         }
//     }
//     guesses++;

// }

// console.log(`It took you ${guesses} guesses.`)

// Todo List Project

// let todoList = [];

// while(true){
//     let option = prompt("What would you like to do?").toLowerCase();

//     if(option === "quit") break;
//     else if(option === "list"){
//         console.log("***************");
//         for(let i=0; i<todoList.length; i++){
//             console.log(`(${i}) ${todoList[i]}`);
//         }
//         console.log("***************");
//     }
//     else if(option === "delete"){
//         let deleteIndex = parseInt(prompt("Enter the index of the item you would like to delete:"));
//         todoList.splice(deleteIndex, 1);
//         console.log(`Index ${deleteIndex} has been deleted.`);
//     }
//     else if(option === "new"){
//         let taskName = prompt("Enter task name:")
//         todoList.push(taskName);
//         console.log(`${taskName} has been added to the list.`);
//     }
// }

// function repeat(message, n){
//     let result = "";
//     for(let i=0; i<n; i++){
//         result += message;
//     }
//     console.log(result);
// }

// repeat("Hello", 19);

// function callTwice(f) {
//     f();
//     f();
// }

// const rollDie = function(){
//     console.log(Math.floor(Math.random()*6) + 1);
// }

// callTwice(rollDie);

// function makeBetweenFunc(min, max){
//     return function(num){
//         return num > min && num < max;
//     }
// }

// const myMath = {
//     PI: 3.14,
//     square : function(x){
//         return x*x;
//     }
// }


// // nums.forEach(function (n) {
// //     console.log(n * 2)
// // });

// // const biggerNums = nums.map((x) => {
// //     return 5*x;
// // })

// const square = (x) => {
//     return x**2;
// }

// numsSquared = nums.map(square);

// const cube = x => x**3;



// const biggerNums = nums.filter(x => x > 7);
// const nums = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = nums.every(n => n < 0);
// console.log(result);

const rollDie = (numSides=6) => {
    return Math.floor(Math.random() * numSides) + 1;
}

//iehdaidhwauibdjdbwaiubfcioabiouaebfawbhfabhdawiubdjiwahda