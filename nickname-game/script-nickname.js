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
const nicknameLetterF = ["Fatality", "Freaky", "Fender", "Fury", "Falcon"];
const nicknameLetterG = ["Grizzly", "Goddess", "Grenade", "Giant", "Gargoyle"];
const nicknameLetterH = ["Hurricane", "Hannibal", "Hellcat", "Haunter", "Hummer"];
const nicknameLetterI = ["Insurgent", "Idol", "Iron", "Impulse", "Insomnia"];
const nicknameLetterJ = ["Jarring", "Jaguar", "Jesting", "Jagged", "Jazzy"];
const nicknameLetterK = ["Killer", "Kraken", "Knuckles", "Kamikaze", "Kingly"];
const nicknameLetterL = ["Lynch", "Lucky", "Lightning", "Lance", "Lizard"];
const nicknameLetterM = ["Menace", "Manic", "Magic", "Mad", "Monster"];
const nicknameLetterN = ["Naughty", "Nerd", "Natural", "Noble", "Natty"];
const nicknameLetterO = ["Obscure", "Overtaker", "Osmium", "Odorous", "Oblivion"];
const nicknameLetterP = ["Pumps", "Powerful", "Prodigy", "Panic", "Prankish"];
const nicknameLetterQ = ["Quick", "Quack", "Quelled", "Quirky", "Quaint"];
const nicknameLetterR = ["Rooster", "Roller", "Rackety", "Rize", "Roulette"];
const nicknameLetterS = ["Shadow", "Silky", "Smarmy", "Solitaire", "Spooky"];
const nicknameLetterT = ["Twitch", "Terror", "Tequila", "Titanium", "Twiggy"];
const nicknameLetterU = ["Urban", "Ugly", "Unleashed", "Uppish", "Undercover"];
const nicknameLetterV = ["Vanity", "Voodoo", "Villain", "Void", "Venom"];
const nicknameLetterW = ["Wicked", "Wacky", "Wraith", "Wild", "Wizen"];
const nicknameLetterX = ["Xenon", "Xeric", "Xerothermic", "XD", "X-Ray"];
const nicknameLetterY = ["Yolo", "Yielding", "Yelled", "Yellow", "Yawning"];
const nicknameLetterZ = ["Zippy", "Zero", "Zorkle", "Zestful", "Zealous"];

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
