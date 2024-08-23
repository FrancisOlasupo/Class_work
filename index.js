/* QUESTION 1: 
An array in JavaScript is a non-primitive data type used to store multiple pieces of data in one place, under a single variable name.
When we say an array stores a "collection of elements", it means that an array can hold many pieces of data.
For example, if you have several numbers, instead of storing each number in a separate variable, you can store them all together in one array.
Each piece of data in an array is called an "element". These elements are stored in a specific order inside the array. The position of each element is given a number called an "index", which  starts at 0, which means the first element is at index 0, the second is at index 1, and so on. We can use the index to access or change the elements in the array.
For example, if you want to get the first element, you would use the index 0. Similarly, if you want to change an element, you can do so using its index.
Arrays in JavaScript are flexible because they can hold different types of data, which means we can have numbers, strings (text), objects, or even other arrays inside the same array.
 */

/* QUESTION 2
Here are five common array methods in JavaScript:
1. push(): Adds one or more elements to the end of an array.
2. pop(): Removes the last element from an array.
3. shift(): Removes the first element from an array.
4. unshift(): Adds one or more elements to the beginning of an array.
5. map(): Creates a new array with the results of calling a provided function on every element in the array. */

/* QUESTION 3

let students = ["Chimaobi", "Amarach", "Joseph", "Emma", "Francis"];

// Applying the array methods

// 1. push() - Adds one or more students to the end of the array
students.push("Femi", "Grace"); 
// students is now ["Chimaobi", "Amarach", "Joseph", "Emma", "Francis", "Femi", "Grace"]

// 2. pop() - Removes the last student from the array
students.pop(); 
// students is now ["Chimaobi", "Amarach", "Joseph", "Emma", "Francis", "Femi"]

// 3. shift() - Removes the first student from the array
students.shift(); 
// students is now ["Amarach", "Joseph", "Emma", "Francis", "Femi"]

// 4. unshift() - Adds one or more students to the beginning of the array
students.unshift("Zara", "Yasmin"); 
// students is now ["Zara", "Yasmin", "Amarach", "Joseph", "Emma", "Francis", "Femi"]

// 5. map() - Creates a new array with a greeting for each student
let greetings = students.map(student => `Hello, ${student}!`); 
// greetings is now ["Hello, Zara!", "Hello, Yasmin!", "Hello, Amarach", "Hello, Joseph", "Hello, Emma", "Hello, Francis", "Hello, Femi"]
*/
