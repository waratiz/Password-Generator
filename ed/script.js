const passbox = document.getElementById("Password"); 
const length = 12; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#_-!";
const all = upperCase + lowerCase + number + symbol;

function createPass() {
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > pass.length) {
        pass += all[Math.floor(Math.random() * all.length)];
    }
    passbox.value = pass;
}

function copyPassword() {
    passbox.select();
    navigator.clipboard.writeText(passbox.value);
  }
