//console.log("did you change my file name monsieur?")
console.log("you made it to the console! Congrats!")

function simpleOperators (numberA, numberB) {
  let adding = numberA + numberB ;
  let subtraction = numberA - numberB
  let multiplying = numberA * numberB
  let division = numberA / numberB
  let modulus = numberA % numberB
  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction', subtraction);
  console.log(numberA, numberB, 'multiplying', multiplying);
  console.log(numberA, numberB, 'division', division);
  console.log(numberA, numberB, 'modulus', modulus);

}

//skip count by 6 for 10 times starting at 0;
function skipCounting(interval, times, startingNumber){
  for (let i = 1; i <= times; i ++ ) {
    startingNumber = startingNumber + interval
    console.log(startingNumber);
  }
}


function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd){
     numberStart += skipCount;
     console.log(numberStart);
  }
}

function looseEquality (firstOperand, secondOperand) {
  console.log(firstOperand == secondOperand)
}

function strictEquality (firstOperand, secondOperand) {
  console.log(firstOperand === secondOperand)
}

function customerType (points){
 return type = points > 100 ? 'gold' : 'silver'
}

let number = [69, 149, 420, 782, 1023, 6969, 69420, 900001, '1']

//simpleOperators(number[0], number[1]);
//simpleOperators(number[2], number[3]);
//simpleOperators(number[4], number[5]);
//simpleOperators(number[6], number[7]);


//interval, times, startingNumber
//skipCounting(number[0], number[6], number[1]);
//skipCounting(number[5], number[3], number[2]);
//howManyTimes(number[0], number[7], number[1]);

//loose vs. strict Exampe, == symbol or === symbol returns booleans

//looseEquality (number[7], number[8]);// returns true, compares number 1 with number 1
//strictEquality (number[7], number[8]);// returns false, compares typeof variable with value
console. log(customerType (number[3]));
