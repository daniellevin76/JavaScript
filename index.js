/**
 Skapa en HTML-sida där du lägger till en script-tag som innehåller uppgifterna nedan.



Arrays
======
* 

if/else och while
==============
*
* Krav: 
  - Innan lösningen på varje uppgift ska det stå en kommentar i koden, typ "// Uppgift x"
  - Använd dig av Prettier för att autoformattera koden.
 * 
 * 
 */

//Uppgift 1
//  - Deklarera 3 olika variabler med var, let och const. Valfri namngivning och type.
var myAge = 44;
const myId = "761019";
let myName = "Daniel";

// Uppgift 2
//- Deklarera 5 variabler med let. De ska ha typerna: Boolean, Number, String, Object och Array. Valfria värden.
let isTrue = false;
let num = 7;
let town = "Malmö";
let color = undefined;
let myArray = [2, 3, "blue", "sky"];
/*
Functions
=========
* Uppgift 3
  - Definiera en funktion som returnerar summan av två värden. De två värdena ska vara parametrar till funktionen.
  - Exekvera funktionen ovan med valfria argument. 
  - Det returnerade värdet från funktionen ovan ska sparas i en ny variabel kallad 'sum' (utanför funktionen)
  - Logga ut i konsolen: "Summan blir: xxx", där xxx är värdet av variabeln 'sum'.
*/

function sum(num1, num2) {
  return num1 + num2;
}
let num1 = 7;
let num2 = 5;
let theSum = sum(num1, num2);

console.log(`Summan av talen ${num1} och ${num2} blir ${theSum}`);

// Uppgift 4
// - Logga ut nuvarande datum och tid.

var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(`Dagens datum är ${date}`);
console.log(`Klockan är ${time}`);

/*
 Uppgift 5
  - Deklarera ett objekt som innehåller 3 properties (valfria värden) och en metod som loggar de 3 egenskaperna i konsolen.
  - Exekvera metoden som finns på objektet.
*/

let car = {
  model: "Volvo",
  modelYear: 1964,
  available: true,

  bio: function displayProperties() {
    console.log(this.model + " " + this.modelYear + " " + this.available);
  },
};

car.bio();

/*
Uppgift 6
  - Definiera en array som innehåller värdena 4, 8, 15, 16, 23 och 42 och logga ut den i konsolen.
  - Logga ut i konsolen det sista värdet i arrayen.
  - Filtrera arrayen så att du får en ny array med endast värden lägre än 20. 
  - På resultatet av föregånde operation, använd 'map' för att dubblera alla värden.
  - På resultatet av föregånde operation, använd 'forEach' för att logga ut alla värden vad för sig.
  */

let myArray1 = [4, 8, 15, 16, 23, 42];
console.log(myArray1);
console.log(myArray1[myArray1.length - 1]);

let myArray2 = [];

for (let i = 0; i < myArray1.length; i++) {
  if (myArray1[i] < 20) {
    myArray2.push(myArray1[i]);
  }
}
console.log("Reduced array " + myArray2);

function loweLimit(arr) {
  return arr <= 20;
}
// Alternativt
let myArray4 = myArray2.filter(loweLimit);

console.log("Reduced array " + myArray4);

const doubleValues = myArray2.map((n) => n * 2);
doubleValues.forEach((element) => console.log(element));

/*
 Uppgift 7
  - Gör en 'while'-loop som loopar 6 gånger
  - De tre första looparna ska det loggas ut i konsolen: "Loop 1", "Loop 2" resp "Loop 3".
  - De tre sista looparna ska det loggas ut: "Almost done..."
  - Efter while-loopen ska det loggas ut: "Done!"
*/
let i = 0;
while (i < 6) {
  if (i < 3) {
    console.log(`loop ${i + 1}`);
  } else {
    console.log("Almost done");
  }

  i++;
}
console.log("Done!");
