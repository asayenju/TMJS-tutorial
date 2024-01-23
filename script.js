// Arrays - variables that hold multiple values

//const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[3] = 'grapes'; //Adds value to the correct index value in the array
fruits.push('mangos'); //Adds value at the end of the array
fruits.unshift('strawberries'); //Adds value to the start of array and shift everything to the end
fruits.pop(); //Removes the value at the end from the array or can pass index as an argument to the function and take the value out from the index
console.log(fruits);