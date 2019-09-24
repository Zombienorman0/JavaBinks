//console.log("did you change my file name monsieur?")
console.log("you made it to the console! Congrats!")

console.log('');// prints two spaces in console
console.log('');// output, which is easier to read

let zachBylhouwer = {
  first : "Zach",
  last : "Bylhouwer",
  age : 15,
  hairColor : "Dark Brown",
}

let athenaChow = {
  first : "Athena",
  last : "Chow",
  age : 16,
  hairColor : "Brunette",
}

console.log(athenaChow);
console.log(zachBylhouwer);

let swap = zachBylhouwer.last; // last: Chow
zachBylhouwer.last = athenaChow.last;
athenaChow.last = swap;

console.log(athenaChow);
console.log(zachBylhouwer);
