//1. Given an array as input, build a function that returns the reversed version of the given array
//2. Create a function that states if the given year is a leap (bisestile) year or not.
//3. Create 3 functions: isEvenNumber(), isOddNumber(),
	 //given an array of numbers, loop over it and retrun an array that contains if the correspondent 
   //numer is odd or even

//1. Esercizio
/* var numbers = [1,2,3];
function reverseNumbers(numbers) {
return numbers.reverse()
}

// 2. Esercizio

function isBisestile (anno) {
var isBisexstyle = false;

if (anno % 400 == 0) {
	isBisexstyle = true;
  

}
 else { 
 
   if (anno % 4 == 0  && anno % 100 != 0 ) {
   isBisexstyle = true;
   
   }
  	
   else if((anno % 4 == 0 && anno % 100 == 0) && anno % 400 != 0 {
   isBisexstyle = false;
   }
 
 } 
return isBisexstyle;

} 
*/
           
// 3. Esercizio
var array=[1,2,3];


function isEven(number){
  var pari;
  
  if (number%2==0){
    pari = true;
  }
  
  return pari
}

function isOdd(number){
  if (number%2!=0){
    pari = false;
  }
}

function isEvenNumber(array){
	for (var i = 0 ; i < array.length; i++) {
    if (isEven(array[i] = true)){
        console.log("è pari");
  		}
  	else {
    console.log("è dispari");
  	}
	}  
}


function isEven(number){
  return number%2 == 0;
}

function calculateArray(array){
	
  var result = [];
  
  for (var i= 0; i < array.length; i++){
  	result[i] = isEven(array[i]);
  }
  
  return result;
}
