// Questo coddice fa riferimento al Codeshare.io/gabrielequasar

// THE SUM OF TWO CUBES

/*
Steps:
  1- get 2 numbers
  2- cube each number
  3- sum the cubes
  4- return the result
*/

//Implementation as simple script
var a = 4; // 1- get 2 numbers
var b = 9;

var aCubed = a*a*a; // 2- cube each number
var bCubed = b*b*b;

var sum = aCubed + bCubed; //3- sum the cubes
//4- return the result

// function declaration
function sumOfCubes(a, b){ // 1 - get 2 numbers
  //2- cube each number
  var aCubed = a*a*a;
	var bCubed = b*b*b;
	
  //3- sum the cubes
	var sum = aCubed + bCubed;
  
	//4- return the result
  return sum;

}

var mySum = sumOfCubes(10, 5); //function call
alert('My sum is: ' + mySum);

// make it efficient
// 1
function sumOfCubes(a, b){ 

  var aCubed = a*a*a;
	var bCubed = b*b*b;

  return aCubed + bCubed;

}
// 2
function sumOfCubes(a, b){ 

	var bCubed = b*b*b;

  return  a*a*a + bCubed;

}
// 3
function sumOfCubes(a, b){ 
	
  return  a*a*a + b*b*b;

}


//sumOfCubes('a', 'b'); --> error

var x = 10;
sumOfCubes(x*2, x*3);

//Counts E's in a user-entered phrase

function countE() {
	// ask user to input a phrase
  var phrase = prompt('which phrase would you like to examine');
  // if the entry is invalid
  if (typeof phrase != 'string') {
  	// alert the user
    alert("That's not a valid string");
    // exit function with a failure report
    return false;
    
  } else {  // otherwise
    var eCount = 0;
    // loop the characters of the entry
    for (var i = 0; i < phrase.length; i ++){
   		// if the char is an 'E' (case insensitive)
			if(phrase.charAt(i).toLowerCase() == 'e'){
        // increment the E counter
				eCount++;
      }      
    }
  }
  
  //alert the amount of E
  alert("There are " + eCount + " E's in " + phrase);
  return true;
}


countE(); //call function countE --> display prompt

// SCOPES

var x = 6;

function add(a,b) {
	var x = a + b; //NB: there is 'var' --> new variable
	return x;
}

add(1, 2); // --> 3

console.log(x); // --> 6
//-----

var x = 6;

function add(a,b) {
	x = a + b; //NB: there is NOT 'var' --> use 'x' already defined
	return x;
}
add(1, 2); // --> 3
console.log(x); // --> 3 ( a + b )

// Again

var x = 6;
var y = 4;

function add(a, b) { // a, b are LOCAL
	var x = a + b;
	return x; //x is LOCAL
}

function substract(a, b) { // a, b are LOCAL
	y = a - b;
	return y; //y is GLOBAL
}

// ARRAY

function makeList() {
	var studentOne = 'Gabriele';
  var studentTwo = 'Gino'
  //... is not convenient
}

// array definition
var students = ['Gabriele', 'Gino', 'Leonardo'];
// indexes          0         1          2      : length: 3

students[0]; // --> 'Gabriele'
students.length; // --> 3

// update a value
students[1] = undefined; // ['Gabriele', undefined, 'Leonardo']; empty cell
// length is 3 (unchanged)
students[1] = 'Arianna'; // ['Gabriele', 'Arianna', 'Leonardo'];
// length is 3 (unchanged)

//deletes last element
students.pop(); //deletes last element
//console.log(students.pop()) --> 'Leonardo', ['Gabriele', 'Arianna']

//add one element
students.push('Matteo'); // add
//console.log(students.pop()) --> students.length, ['Gabriele', 'Arianna', 'Mattyx']

// arrays can hold different type of data
var item = 'Ciao';
var comboArray = ['Gabriele', 1, 'Leonardo', true, item];
//console.log(comboArray[0]) --> 'Gabriele'

//arrays can hold arrays too
var comboArray2 = [['a', 'b'], [true, 1]];
//console.log(comboArray2[0]) --> ['a', 'b']
//console.log(comboArray2[0][0]) --> 'a'

//loop over array
var numberList = [2,5,8,4,9,16];

for(var index = 0; index < numberList.length; index++){
	console.log('The value in cell' + index + ' is ' + numberList[index]);
  
  //check if empty if (numberList[index] === undefined) { ... }
  
}

// Do not confuse the index (the position) with the cell content ( numberList[index], value)

//EXERCISES
/*

1. Given an array of numbers, count the even numbers A delete (empty) odds
  	- checks: print array, count even numbers

es:
function countEvenNumberAndEraseOdds( array ) { ... };

var array = [1,3,2,45,2];
countEvenNumberAndEraseOdds(array);

2. addPassenger: Create the following function that
	- takes a name and an list of passengers as inputs
  - if the list is empty add the passenger to the list
  - otherwise
  	- check if there is an empty spot (undefined) in the list and in case add the passenger there
    - otherwise add the passenger at the end of the list
	- return the updated list*/

function addPassenger(name, list) {
	if (list.length == 0) {
  	//entriamo se la lista è vuota
    list.push(name);
 	} 
  else if (list.length > 0){
    
    //entriamo se la lista NON è vuota

    //proviamo ad aggiungerlo a uno spazio vuoto    
		var trovato = false;
    for (var i = 0; i<list.length; i++) {
      if (!trovato && (list[i] == undefined || list[i] == "")){
        list[i] = name;
        trovato = true;
      }
    }
    
    //Non ho trovato spazi vuoti quindi aggiungo alla fine
    if(!trovato) {
       list.push(name);
    }
 	}  

return list;
}

function addPassengerList(names, list) {
  for (var i = 0; i<names.length; i++) {
  	 addPassenger(names[i], list);
  }
console.log('la lista è composta dai seguenti passeggeri: ')
console.log(list)
}




/*es:
function addPassenger(name, list) { ... };

var quasar = [ ... ];

addPassenger('Daniele', quasar);

3. deletePassenger : Create the following function that
	- takes a name and a list of passengers as inputs
  - if the list is empty alert the user the list is empty
  - otherwise
  	- check if the name is in the list and erase it and return the updated list
		- if the passenger was not in the list alert the user
	
es:
function deletePassenger(name, list) { ... };

var quasar = [ ... ];

deletePassenger('Daniele', quasar);
*/

// danieleslvtr@gmail.com