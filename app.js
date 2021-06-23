console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];   //You can use the follow array: const numbers = [2, 22, 12, 17, 18, 39, 129];


function arraySum (numbers) {           //Declare a function arraySum that takes numbers as a parameter; whereas as "numbers" is a parameter
    let sum = 0;                        //Declare a variable sum and initialize sum as 0
    numbers.forEach(function (num) {    //Inside the arraySum function body, iterate over each number (value) in the numbers array using the array's forEach method; whereas "num" is parameter
        sum += num;                     //Inside the body of the forEach callback function, write code so that each number in the numbers array is added to the value of sum
        });
        return sum;                     //Below the forEach method, then return sum
    }
    
    console.log(arraySum(numbers));     //Call the arraySum(numbers) method inside console.log to print out the returned sum.



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
 //first
 const favBook = {
    title: null,
    author: null,
    numberOfPages:null,
    readCount: null,
 }

 favBook.title = "Thankless in Death"
 favBook.author = "JD Robb";
 favBook.pages = 400;
 favBook.readCount = 2;

 favBook.info = function () {
    console.log (`The ${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`,);
};

favBook.info();


 /*
const book = {
    title: "Thankless in Death",
    author: "JD Robb",
    numberOfPages:"400",
    readCount: "2",
    readBook: {
        read:"yes",
        notRead:"no",
    },
    info: `The ${title} by ${author}, ${numberOfPages} pages, read ${readCount} times.`,
};

console.log (book.info);
*/