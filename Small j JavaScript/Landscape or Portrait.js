//console.log("did you change my file name monsieur?")
//console.log("you made it to the console! Congrats!")

let stop = false;// Not a number test variable

function testNaN (number) {
 console.log (stop);
 if (isNAN (number) ) {
   stop = true;
  return "type a real number"
 } else {
   return "Input Validated"
 }
}

function main() {
  //console.log("It works");

  let firstNumber;
  let secondNumber;
  let text;

  // get the width value from the id=textField1
  firstNumber = document.getElementByID("textfield1").value;

  //testNaN (firstNumber);
  document.getElementByID("validityTest1").innerHTML = alert ( testNaN(firstNumber));
  document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);

  // get the height value from the id=textfield2
  secondNumber = document.getElementByID("textfield2").value;
  //testNaN (secondNumber);
  document.getElementByID("validityTest2").innerHTML = alert ( testNaN(secondNumber));
  document.getElementByID("validityTest2").innerHTML = testNaN (secondNumber);

if (stop == true) {
document.getElementByID ("answer").innerHTML = "restart the example, a width or height needs to be a number"
}else {
  console.log("the display geometry is", geometry (firstNumber, secondnumber) );
  document.getElementByID('answer').innerHTML = "this display is " + geometry (firstNumber, secondnumber);
 }

}
