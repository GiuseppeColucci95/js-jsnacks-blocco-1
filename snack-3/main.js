
/* 
TRACCIA
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.a
*/


//ask user ten number and save them in an array
const numbers = []

for (let i = 0; i < 10; i++) {
  const thisNumber = Number(prompt("Inserisci un numero qualunque"));

  numbers.push(thisNumber);
}

//print numbers
console.log(numbers);


//print sum numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

