/* 
TRACCIA
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const firstNumber = prompt("Inserisci un numero [es. 1, 2, 3, ...]");
const secondNumber = prompt("Inserisci un altro numero [es. 1, 2, 3, ...]");

if (firstNumber > secondNumber) {
  alert(`Il primo numero è maggiore del secondo: ${firstNumber}`);
} else if (secondNumber > firstNumber) {
  alert(`Il secondo numero è maggiore del primo: ${secondNumber}`);
} else {
  alert(`I due numeri sono uguali: ${firstNumber} e ${secondNumber}`);
}
