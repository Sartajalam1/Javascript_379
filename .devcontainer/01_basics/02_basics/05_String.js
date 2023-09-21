// string in 'Single', "double" and `bacti`qoute can be using in string 
const name = " Sartaj ";
const repoCount = 3;
// these Syntax is right;
// console.log(name + repoCount + "value")

// Modern day using Bactic ``, is me  String Interpulation atta hai, there is define the placeholder in inject value
console.log(`Hello my is ${name} and my repo count is ${repoCount}`);
const gameName = new String("sartaj");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)) //is se pata kar sakte hai ki kaun se index par kya letter hai
console.log(gameName.indexOf('t')); // is se index ka number pata kar sakte hai

const newString  = gameName.substring(0,4); 
console.log(newString);

const anotherString = gameName.slice(-8,4); // bouns point put the negative value
console.log(newString);

const newStringOne = "  sartaj   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //trim space remove karta hai stating ho ya last ho

const url = "https://sartaj.com/sartaj%20choudhary"
console.log(url.replace ('%20','-'));