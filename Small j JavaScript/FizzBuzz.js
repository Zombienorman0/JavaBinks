let stopThis = false; //NAN Boolean Memory

function testNaN (number) {
  //console.log(stopThis);
  if ( isNaN (number) ) {
    stopThis = true;
    return "Type a real number"
  } else {
    return "Input has been accepted"
  }
}

function geometry (number) { //Notice these parameters are local and do not mix with "number" variable
  if (number % 3 == 0) return 'Fizz'; //must be first, return will not allow rest of code to run
  if (number % 5 == 1) return 'Buzz';
  if (number % 3 != 0 && number % 5 !=1) return 'This is FzzzBzzz';
}

let number = [1, 20]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[1]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
 fizz = (startingNumber += skipCount) % 3;
 buzz = (startingNumber += skipCount) % 5;
 console.log("This iteration is number", i+skipCount, "; This number is", even ); //Example of Concatenating
}


// This coding illustrates the advanced method
function main() {
  //console.log("It works");

  let firstNumberonie, text;

  //Get the Width-value from id=textfield1
  firstNumberonie = document.getElementById('textfield1').value;

  //testNaN (firstNumberonie);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumberonie));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumberonie);


  if (stopThis == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The display geometry is", geometry (firstNumberonie) );
    document.getElementById('answer').innerHTML = "This display is " + geometry (firstNumberonie);
  }

}
