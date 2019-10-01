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

function geometry (width, height) { //Notice these parameters are local and do not mix with "number" variable
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

function checkBoxes() {
  let checkBox1, checkBox2, checkBox3;
  checkBox1 = document.getElementById('checkBox1').checked;
  checkBox2 = document.getElementById('checkBox2').checked;
  checkBox3 = document.getElementById('checkBox3').checked;
  if ( checkBox1 == true ) {
    document.getElementById('checkBox1_answer').innerHTML = "Landscape";
  } else {
    document.getElementById('checkBox1_answer').innerHTML = "Answer?";
  }
  if ( checkBox2 == true ) {
    document.getElementById('checkBox2_answer').innerHTML = "Portrait";
  } else {
    document.getElementById('checkBox2_answer').innerHTML = "Answer?";
  }
  if ( checkBox3 == true ) {
    document.getElementById('checkBox3_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkBox3_answer').innerHTML = "Answer?";
  }
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
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The display geometry is", geometry (firstNumberonie, secondNumberonie) );
    document.getElementById('answer').innerHTML = "This display is " + geometry (firstNumberonie, secondNumberonie);
  }

}
