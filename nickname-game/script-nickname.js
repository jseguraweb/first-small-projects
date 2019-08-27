// NICKNAME GAME

// The goal of this JS project is to return the user a random nickname which begins with the same letter that his/her name does.
// For this I will store 5 nicknames per letter of the alphabet.

const nicknameLetterA = ["Atilla", "Awesome", "Axe", "Abyss", "Amaretto"];
const nicknameLetterB = ["Bitter", "Barbarian", "Buffy", "Bubble", "Bullet"];
const nicknameLetterC = ["Crusher", "Creepy", "Cranky", "Cobra", "Coyote"];
const nicknameLetterD = ["Dirty", "Donut", "Destroyer", "Diablo", "Dragon"];
const nicknameLetterE = ["Eternal", "Epic", "Eliminator", "Egomaniac", "Explosive"];


function giveNicknameWithLetterA() {
    return nicknameLetterA[Math.floor(Math.random() * 5)];
}

function validate(userName) {
    if (userName[0] === "A") {
        return `${giveNicknameWithLetterA()} ${userName}`;
    }
}

console.log(validate("Anton"));