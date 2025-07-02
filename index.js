const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdLength = 12;

function randomCharacter() {
    let getRandomChar = Math.floor(Math.random()*characters.length);
    return characters[getRandomChar]
}

function generate() {
    let pwd1 = "";
    let pwd2 = "";
    for(let i = 0; i < pwdLength; i++) {
        pwd1 += randomCharacter()
        pwd2 += randomCharacter()
    }
    document.getElementById("password1").value = pwd1;
    document.getElementById("password2").value = pwd2;
}