console.log('GOOD LUCK 👩‍💻 👨‍💻') 
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}

2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE         

sum = (a , b) => {a + b}
  


//2) WRITE YOUR CODE UNDER THIS LINE         
 consoleReturn = (x,y)=>{
  console.log(x)
  return y
}

//3) WRITE YOUR CODE UNDER THIS LINE         
var name="Alex"
var age=25
var result="My name is: " $(name) "and my age is: "  $(age)
//4) WRITE YOUR CODE UNDER THIS LINE         
var food="Fried Chicken"
var color="Blue"
var object={
  food,
  color
}
//5) WRITE YOUR CODE UNDER THIS LINE         

var object2={
  multi(a,b){
    return a * b
  }
};





/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  
}
*/

// WRITE YOUR CODE UNDER THIS LINE
class computer {
  constructor(OS , RAM ,CPU)  {
    this.OS='Windows',
  this.RAM=16,
  this.CPU='I7',
  doubleRAM(){
    return computer.RAM*2 
  }
  };
  
};






/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle() {
    this.state.title = 'AGGREGOR ZOLDYCK'
  }
  render() {
    return (
    <div>
      <h1>App Component => state.title</h1>
      <button onClick={this.changeTitle}>Change Title</button>
      <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} />
    </div>
    );
  }
}

// Tasks Component
import React, { Component } from 'react';

class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    day = 'Sun'
  }

  render() {
    return (
      <div>
        <h1>Tasks Component => state.day</h1>
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.changeTitle}>Change App State</button>
      </div>
    );
  }
}
