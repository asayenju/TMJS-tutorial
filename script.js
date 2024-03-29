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

// for of loop
for(let todo of todos) {
    console.log(todo);
}

// While loop
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
});
  
// map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
console.log(todoTextArray);
  
// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
});

// Arrow functions
const addNums = num1 => num1 + 5; //addNums is the function and the parameter is num1 and num1 + 5 is the return system which the arrows point to
console.log(addNums(5)); //this should give 10 as output

// OOP
/*
// Constructor Function
function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
    // this.getBirthYear = function(){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  
  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  
  // Instantiate an object from the class
  const person1 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Steve', 'Smith', '8-2-90');
  
  console.log(person2);
  
  // console.log(person1.getBirthYear());
  // console.log(person1.getFullName());
  
  
  
  // Built in constructors
  const name = new String('Kevin');
  console.log(typeof name); // Shows 'Object'
  const num = new Number(5);
  console.log(typeof num); // Shows 'Object'
  */
  /*
  // ES6 CLASSES
  class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  */
  //const person3 = new Person('John', 'Doe', '7-8-80');
  //console.log(person1.getBirthYear());

// DOM for the html
// single element
//const form = document.getElementById('my-form');
//console.log(document.querySelector('.container')); //can use everything like tags, class and ids

// multiple element
//console.log(document.querySelectorAll('.item')); //selects all of the item class recommended
//console.log(document.getElementsByClassName('item'));
//console.log(documents.getElementsByTagName('li')); 

//iterating through the items
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

/*
//Changing properties within the html file by js
const ul = document.querySelector('.items');
//ul.remove(); //the whole list will be gone
//ul.lastElementChild.remove() //remove last element child
ul.firstElementChild.textContent = 'Hello'; //Hello added to first item
ul.children[1].innerText = 'Brad'; //Brad added to second item
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //Hello in h1 form added to third item
const btn = document.querySelector('.btn');
btn.style.background = 'red'; //changes button color
*/

/*
//Changing properties with a click of button
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault(); //it basically stops it from the return statement to be displayed briefly as it stays all along
    console.log('click');
    console.log(e.target); //we can get all the attributes by these
    document.querySelector("#my-form").style.background = '#ccc'; // change color from grey to dark grey
    document.querySelector('body').classList.add('bg-dark'); // added pre-existing class when clicked button
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector("#email");
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error');
        msg.innterHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //This is how to add text to li
        userList.appendChild(li)  ; //then add it to the userList

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}