// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const sayHello = function(){
  console.log("Hello...");
  hellotext = "is it me you're looking for.";            
  function actualfunction(){
    console.log(hellotext);    
  }
  return actualfunction();
}
sayHello();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  function thisisahorriblenameforafunction() {
    return num++;
  }
  return thisisahorriblenameforafunction;        
};
const newCounter = counter();
newCounter();
newCounter();


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
