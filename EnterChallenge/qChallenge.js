/* In this file, I aimed to write the code that checks whether the users input is q.*/

let girdi;
let cevap;
do {
    girdi = prompt(`Girdi yapınız :`);
    if (girdi=="q" || girdi=="Q" ) {
        cevap = alert(`Tebrikler 😂`);
        break
    }

    else{
        cevap = alert(`Tekrar deneyiniz 😂`);
    }

} while (girdi != `q` || girdi != `Q`);
