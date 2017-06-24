//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
if (name === "Tyler"){
  return true;
}else{
  return false;
}

}

  
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


// function getName(){
// var name = prompt("What is your name ?");
// return name;
// }
// var yourName =''; 
function getName(){
var name = prompt("What is your name ?");
return name;
}


  //Code Here
//////////////////PROBLEM 3////////////////////




//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is

function welcome (){
  // yourName = getName();
  // alert("Welcome, " + yourName);
  alert("Welcome, " + getName());
}
 
welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//   Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.

// function example (num1, num2 <--[parameters]){
// var a = num1 + num2;
// } 
// example(1,3 <--[arguments])
// //////////////////PROBLEM 5////////////////////



// //What are all the falsy values in JavaScript and how do you check if something is falsy?


//   false,null,NAN,'',undefined,0.
//   with a boolean Statment.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName () {
    
    return "Scott Knudsen"; 
  }
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){

    return function(){
      return newMyName();
    }

  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();