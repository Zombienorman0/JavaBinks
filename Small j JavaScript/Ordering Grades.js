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

function orderingThree (firstly, secondly, thirdly, fourthly, fifthly) { //Notice these parameters are local and do not mix with "number" variable
  //Memory variable
  let memory1;


  //If numbers out of order
  //Use desending sequence to illustrate while loop ... if statements fail without WHILE since double switch required
  //For example: 70, 60, 50
  while (firstly > secondly || secondly > thirdly|| thirdly > fourthly || fourthly > fifthly) {
    if (firstly > secondly) {
      memory1 = secondly;
      secondly = firstly;
      firstly = memory1;
    }
    if (secondly > thirdly) {
      memory1 = thirdly;
      thirdly = secondly;
      secondly = memory1;
    }
    if (thirdly > fourthly) {
      memory1 = fourthly;
      fourthly = thirdly;
      thirdly = memory1;
    }
    if (fourthly > fifthly) {
      memory1 = fifthly;
      fifthly = fourthly;
      fourthly = memory1;
    }
  }

  //Final Check: this checks if numbers are in order
  //Also checks if numbers are equal and catches if something is wrong
  if (firstly <= secondly) {
     if (secondly <= thirdly) {
        if (thirdly <= fourthly) {
          if (fourthly <= fifthly) {

       return firstly + ", " + secondly + ", " + thirdly + ", " + fourthly + ", " + fifthly;
         }
        }
      }
   }else {
     return "Check program for errors"
   }
 }

 function checkboxes() {
  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;

  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "False, 50% is less than 60%";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "False, 70% > 65%";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "False, these numbers are the same";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
}
// This coding illustrates the advanced method
function main() {

  let firstlyNumberonie, secondlyNumberonie, thirdlyNumberonie, fourthlyNumberonie, fifthlyNumberonie, text;

  //Get the Width-value from id=textfield1
  firstlyNumberonie = document.getElementById('textfield1').value;

  //testNaN (firstlyNumberonie);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstlyNumberonie));
  document.getElementById('validityTest1').innerHTML = testNaN (firstlyNumberonie);

  //Get the Height-value from id=textfield2
  secondlyNumberonie = document.getElementById('textfield2').value;
  //testNaN (secondlylyNumberonie);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondlyNumberonie));
  document.getElementById('validityTest2').innerHTML = testNaN (secondlyNumberonie);

  thirdlyNumberonie = document.getElementById('textfield3').value;

  //testNaN (firstlyNumberonie);
  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdlyNumberonie));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdlyNumberonie);

  //Get the Height-value from id=textfield2
  fourthlyNumberonie = document.getElementById('textfield4').value;
  //testNaN (secondlyNumberonie);
  document.getElementById('validityTest4').innerHTML = alert ( testNaN (fourthlyNumberonie));
  document.getElementById('validityTest4').innerHTML = testNaN (fourthlyNumberonie);

  fifthlyNumberonie = document.getElementById('textfield5').value;
  //testNaN (secondlyNumberonie);
  document.getElementById('validityTest5').innerHTML = alert ( testNaN (fifthlyNumberonie));
  document.getElementById('validityTest5').innerHTML = testNaN (fifthlyNumberonie);


  if (stop == true) {
      document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
    } else {
      console.log("The smallest to largest order is ", orderingThree (firstlyNumberonie, secondlyNumberonie, thirdlyNumberonie, fourthlyNumberonie, fifthlyNumberonie) );
      document.getElementById('answer').innerHTML = "The numbers " +  firstlyNumberonie + ", " + secondlyNumberonie + ", " + thirdlyNumberonie + ", " + fourthlyNumberonie + ", " + fifthlyNumberonie+" in order from smallest to largets is ... \n" +
      orderingThree(firstlyNumberonie, secondlyNumberonie, thirdlyNumberonie, fourthlyNumberonie, fifthlyNumberonie);
    }
  }
