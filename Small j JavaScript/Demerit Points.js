

let stop = false;

function testNaN (number) {

  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function main() {


  let firstlyNumberonie, secondlyNumberonie;

  firstlyNumberonie = document.getElementById('textfield1').value;


  if (firstlyNumberonie == '') {
    firstlyNumberonie = 70;
  } else if (firstlyNumberonie != '') {
  } else {
  }

  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstlyNumberonie));
  document.getElementById('validityTest1').innerHTML = testNaN (firstlyNumberonie);


  secondlyNumberonie = document.getElementById('textfield2').value;

  if (secondlyNumberonie == '') {
    stop = true;
    secondlyNumberonie = 0;
  } else if (secondlyNumberonie != '') {
  } else {
  }


  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondlyNumberonie));
  document.getElementById('validityTest2').innerHTML = testNaN (secondlyNumberonie);


  console.log("In memory, \n the first number is " + firstlyNumberonie + " and \n the second number is " + secondlyNumberonie);
  document.getElementById('speedLimitingForU').innerHTML = firstlyNumberonie;
  document.getElementById('speedYouBe').innerHTML = secondlyNumberonie;

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, your speed is a zero so how are you driving?"
  } else {
    console.log("Demerit Calculation is: ", demeritCalculation (firstlyNumberonie, secondlyNumberonie) );
    document.getElementById('answer').innerHTML = "Demerit Calculation is: " + demeritCalculation (firstlyNumberonie, secondlyNumberonie);
  }
}



function demeritCalculation (speedLimitingForU, speedYouBe) {
  if (speedYouBe < speedLimitingForU) return 'Speed is less than the speed limit, idK why i pulled you over, probably for another DUI or something?';
  if (speedYouBe < speedLimitingForU + 1*5) return 'Speed is over speed limit but within grace range, no demerit points need to be awarded for you!';
  if (speedYouBe < speedLimitingForU + 2*5) return '1 demerit points! Dont speed please';
  if (speedYouBe < speedLimitingForU + 3*5) return '2 demerit points! Dont speed please';
  if (speedYouBe < speedLimitingForU + 4*5) return '3 demerit points! your driving is ok.';
  if (speedYouBe < speedLimitingForU + 5*5) return '4 demerit points! your driving is ok.';
  if (speedYouBe < speedLimitingForU + 6*5) return '5 demerit points! your driving is ok.';
  if (speedYouBe < speedLimitingForU + 7*5) return '6 demerit points! your driving is ok.';
  if (speedYouBe < speedLimitingForU + 8*5) return '7 demerit points! your driving is ok.';
  if (speedYouBe < speedLimitingForU + 9*5) return '8 demerit points! Are you bad at driving or no.';
  if (speedYouBe < speedLimitingForU + 10*5) return '9 demerit points! Are you bad at driving or no.';
  if (speedYouBe < speedLimitingForU + 11*5) return '10 demerit points! Are you bad at driving or no.';
  if (speedYouBe < speedLimitingForU + 12*5) return '11 demerit points! Are you bad at driving or no.';
  if (speedYouBe < speedLimitingForU + 13*5) return '12 demerit points! Are you bad at driving or no.';
  if (speedYouBe < speedLimitingForU + 14*5) return '13 demerit points! Are you bad at driving or no.';
  if (speedYouBe >= speedLimitingForU + 14*5) return 'Weee Wooo, Weee Wooo! your going faster than the delorean in back to the future, how have you not converted space and time all together!';
  return 'Check the Algorithm for errors';
}
