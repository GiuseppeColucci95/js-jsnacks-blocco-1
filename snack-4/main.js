
/* 
TRACCIA
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/


//create an array
const numbers = [];

//create a for loop to ask user 6 times to insert a number
for (let i = 0; i < 6; i++) {
  const thisNumber = Number(prompt("Inserisci un numero qualunque"));

  //check if number is odd and eventually insert it in the array
  if (thisNumber % 2 !== 0) {
    numbers.push(thisNumber);
  }
}

//print the array with odd numbers
console.log(numbers);
