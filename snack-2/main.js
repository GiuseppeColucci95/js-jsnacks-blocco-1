/* 
TRACCIA
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga
*/

//ask to the user two string and save them in two variables
const firstWord = prompt("Inserisci una parola qualunque");
const secondWord = prompt("Inserisci un'altra parola qualunque");

//check the shorter word
if (firstWord.length > secondWord.length) {
  //print it in order
  console.log(secondWord);
  console.log(firstWord);
} else if (secondWord.length > firstWord.length) {
  //print it in other order
  console.log(firstWord);
  console.log(secondWord);
} else {
  //print it in equal order
  console.log(`Two words have the same length: ${firstWord} and ${secondWord}`);
}


