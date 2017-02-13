//v1

var numbers = [1,2,3,4,5,6,8,10,11,7,14,13,18,20]


function countEvensnNumbers(numbers){
    var i = 0,
        even = 0;
  
    while (i < numbers.length) {
        
      if (numbers[i] %2 == 0) {
            even++
        }
      
        i++
    }
  
  console.log('il numero dei numeri pari e: ' + even)
}

countEvensnNumbers(numbers)

console.log(even)




//v2

var numbers = [1,2,3,4,5,6,8,10,11,7,14,13,18,20]
var even = 0

function countEvensnNumbers(numbers){
    var i = 0
    while (i<numbers.length) {
        if (i %2 == 0) {
            even++
            i++
        }
        i++
    }
}

countEvensnNumbers(numbers)

console.log(even)
