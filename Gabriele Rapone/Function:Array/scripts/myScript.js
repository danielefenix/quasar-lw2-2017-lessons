var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var even = [];
//CHECKS AND MANAGES EVEN & ODD NUMBERS
var evenOddFilter = function (numbers) {
    //CHECK FOR EVEN NUMBER
    for (i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) === 0) {
            even.push(numbers[i]);
        }
        //CHECK FOR ODD NUMBER
        if ((numbers[i] % 2) != 0) {
            numbers.splice(i, 1);
            i--;
        }
    };
}
evenOddFilter(numbers);
console.log("Those are the even numbers " + even);
console.log("This is the array without odd numbers " + numbers);