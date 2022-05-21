/* In this file, I aimed to write the code that checks whether the users input is q.*/

let usersEntries;
let cevap;
do {
    usersEntries = prompt(`Enter a word :`);
    if (usersEntries=="q" || usersEntries=="Q" ) {
        cevap = alert(`Congratulations! 😂`);
        break
    }

    else{
        cevap = alert(`Try again! 😥`);
    }

} while (usersEntries != `q` || usersEntries != `Q`);
