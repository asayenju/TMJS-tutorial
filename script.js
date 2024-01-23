// Arrays - variables that hold multiple values

//const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[3] = 'grapes'; //Adds value to the correct index value in the array
fruits.push('mangos'); //Adds value at the end of the array
fruits.unshift('strawberries'); //Adds value to the start of array and shift everything to the end
fruits.pop(); //Removes the value at the end from the array or can pass index as an argument to the function and take the value out from the index
console.log(fruits);

// Dictionaries - data structure that is used to store data using key and value system
const Person = {
    firstName: 'John',
    secondName: 'Doe',
    age: 30,
    hobbies: ['music', 'soccer', 'movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
};

/* Instances of how we can use this dictionary
console.log(Person);
console.log(Person.hobbies[1]); to access the array in the dict
console.log(Person.address.street); to access a dictionary withim a dictionary
Person.email = 'john@gmail.com'; to add a new key and value in the dictionary
*/

//Another example of dictionary in array
const todos = [
    {
        id: 1,
        text: 'take trash out',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    }
];

//console.log(todos[1].text); it prints out the text in id 2 which is Meeting with boss

// For loop
for(let i=0; i<= 10; i++) { //Difference between let and var is that let can only change inside the function and remains unchanged outside the function whereas var changes outside the block
    console.log(`For Loop number: ${i}`)

}