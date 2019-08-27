// NICKNAME GAME

// The goal of this JS project is to return the user a random nickname which begins with the same letter that his/her name does.
// For this I will store 5 nicknames per letter of the alphabet.

/**
 * Here we have all the different nickname groups
 */

const nicknameLetterA = ["Atilla", "Awesome", "Axe", "Abyss", "Amaretto"];
const nicknameLetterB = ["Bitter", "Barbarian", "Buffy", "Bubble", "Bullet"];
const nicknameLetterC = ["Crusher", "Creepy", "Cranky", "Cobra", "Coyote"];
const nicknameLetterD = ["Dirty", "Donut", "Destroyer", "Diablo", "Dragon"];
const nicknameLetterE = ["Eternal", "Epic", "Eliminator", "Egomaniac", "Explosive"];
const nicknameLetterF = [];
const nicknameLetterG = [];
const nicknameLetterH = [];
const nicknameLetterI = [];
const nicknameLetterJ = [];
const nicknameLetterK = [];
const nicknameLetterL = [];
const nicknameLetterM = [];
const nicknameLetterN = [];
const nicknameLetterO = [];
const nicknameLetterP = [];
const nicknameLetterQ = [];
const nicknameLetterR = [];
const nicknameLetterS = [];
const nicknameLetterT = [];
const nicknameLetterU = [];
const nicknameLetterV = [];
const nicknameLetterW = [];
const nicknameLetterX = [];
const nicknameLetterY = [];
const nicknameLetterZ = [];

/**
 * The first function which is going to be call is validate() at the very bottom
 * After it and depending on the first letter of the username, one of the other functions will be called
 */

function giveNicknameWithLetterA() {
    return nicknameLetterA[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterB() {
    return nicknameLetterB[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterC() {
    return nicknameLetterC[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterD() {
    return nicknameLetterD[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterE() {
    return nicknameLetterE[Math.floor(Math.random() * 5)];
}

function validate(userName) { // TO DO: userName will be removed from the description and converted into a variable inside the function
    // TO DO: const userName = document.getElementById("nicknameBox").value;
    if (userName[0] === "A") {
        return `${giveNicknameWithLetterA()} ${userName}`;
    } else if (userName[0] === "B") {
        return `${giveNicknameWithLetterB()} ${userName}`;
    } else if (userName[0] === "C") {
        return `${giveNicknameWithLetterC()} ${userName}`;
    } else if (userName[0] === "D") {
        return `${giveNicknameWithLetterD()} ${userName}`;
    } else if (userName[0] === "E") {
        return `${giveNicknameWithLetterE()} ${userName}`;
    } else {
        return `Your name is already a challenge my dear ${userName}...`
    }
}

console.log(validate("Anton"));
console.log(validate("Berto"));
console.log(validate("Coral"));
console.log(validate("Dora"));
console.log(validate("Eva"));
console.log(validate("Jaime"));
