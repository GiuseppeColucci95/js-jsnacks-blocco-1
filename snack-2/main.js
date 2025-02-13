/* 
TRACCIA
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga
*/

/* //ask to the user two string and save them in two variables
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
 */



//second possible execution

//ask to the user two string and save them in an array
const words = [];

words.push(prompt("Inserisci una parola qualunque"));
console.log(words);
words.push(prompt("Inserisci un'altra parola qualunque"));
console.log(words);


for (let i = 0; i < words.length; i++) {
  let shorter = words[i];
  for (let y = i + 1; y < words.length; y++) {

    if (words[y].length < words[i].length) {
      shorter = words[y];
    }
  }
  console.log(shorter);
  words.splice(words.indexOf("shorter"), 1);
}

