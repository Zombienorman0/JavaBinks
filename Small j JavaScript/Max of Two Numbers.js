//console.log("did you change my file name monsieur?")
//console.log("you made it to the console! Congrats!")
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

function smallestToLargest (first, second) { //Notice these parameters are local and do not mix with "number" variable
  if (first == second ) return 'Numbers are the same'; //must be first, return will not allow rest of code to run
  return (first < second) ? first + ', ' + second: second + ', ' + first; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

// This coding illustrates the advanced method
function main() {
  //console.log("It works");

  let firstNumberonie, secondNumberonie, text;

  //Get the Width-value from id=textfield1
  firstNumberonie = document.getElementById('textfield1').value;

  //testNaN (firstNumberonie);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumberonie));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumberonie);

  //Get the Height-value from id=textfield2
  secondNumberonie = document.getElementById('textfield2').value;
  //testNaN (secondNumberonie);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumberonie));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumberonie);

  if (stopThis == true) {
    document.getElementById('answer').innerHTML = "Restart the example."
  } else {
    console.log("smallest number is ",  smallestToLargest(firstNumberonie, secondNumberonie), "is the largest number. ");
    document.getElementById('answer').innerHTML = "smallest number to largest number ... " + smallestToLargest (firstNumberonie, secondNumberonie);
  }

}
