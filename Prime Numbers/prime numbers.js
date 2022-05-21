let aNumber = prompt(`Please enter a number :`);
let sayac = 0;
if (aNumber <= 1) {
    console.log(`Prime Numbers must be greater than 1 ❗❕`);
} else {
    for (let i = 1; i <= (aNumber / 2); i++) {
        if (aNumber % i == 0) {
            sayac += 1;
        }
    }
    if (sayac < 3) {
        console.log(`${aNumber} is  a Prime Number`);
    } else {
        console.log(`${aNumber} is not a Prime Number`);
    }
}
