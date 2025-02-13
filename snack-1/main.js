/* 
TRACCIA
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/


//ask users two numbers and save it in two variables
const firstNumber = Number(prompt("Inserisci un numero [es. 1, 2, 3, ...]"));
const secondNumber = Number(prompt("Inserisci un altro numero [es. 1, 2, 3, ...]"));

//check if first number is greater than second
if (firstNumber > secondNumber) {
  alert(`Il primo numero è maggiore del secondo: ${firstNumber}`);
}
//otherwise check if second number is greater tha  first
else if (secondNumber > firstNumber) {
  alert(`Il secondo numero è maggiore del primo: ${secondNumber}`);
}
//otherwise they are equal
else {
  alert(`I due numeri sono uguali: ${firstNumber} e ${secondNumber}`);
}
