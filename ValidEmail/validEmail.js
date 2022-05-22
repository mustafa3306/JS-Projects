let email = prompt("Please enter email :");
function emailvalidator(email) {
    if (email.includes("@") && email.includes(".")) {
        let lastItems = (email.length - 1) - email.indexOf(".");
        let firstItems = email.slice(0, email.indexOf("@"));
        if (firstItems.search(/\W/g) === -1 && (lastItems >= 2 && lastItems < 4)) {
            return "valid";
        } else {
            return "invalid";
        }

    }
}
console.log(emailvalidator(email));