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

function giveNicknameWithLetterF() {
    return nicknameLetterF[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterG() {
    return nicknameLetterG[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterH() {
    return nicknameLetterH[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterI() {
    return nicknameLetterI[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterJ() {
    return nicknameLetterJ[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterK() {
    return nicknameLetterK[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterL() {
    return nicknameLetterL[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterM() {
    return nicknameLetterM[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterN() {
    return nicknameLetterN[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterO() {
    return nicknameLetterO[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterP() {
    return nicknameLetterP[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterQ() {
    return nicknameLetterQ[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterR() {
    return nicknameLetterR[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterS() {
    return nicknameLetterS[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterT() {
    return nicknameLetterT[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterU() {
    return nicknameLetterU[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterV() {
    return nicknameLetterV[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterW() {
    return nicknameLetterW[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterX() {
    return nicknameLetterX[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterY() {
    return nicknameLetterZ[Math.floor(Math.random() * 5)];
}

function giveNicknameWithLetterZ() {
    return nicknameLetterE[Math.floor(Math.random() * 5)];
}

function validate(userName) { // TO DO: userName will be removed from the description and converted into a variable inside the function
    // TO DO: const userName = document.getElementById("nicknameBox").value;
    if (userName[0] === "A" || userName[0] === "a") {
        return `${giveNicknameWithLetterA()} ${userName}`;
    } else if (userName[0] === "B" || userName[0] === "b") {
        return `${giveNicknameWithLetterB()} ${userName}`;
    } else if (userName[0] === "C" || userName[0] === "c") {
        return `${giveNicknameWithLetterC()} ${userName}`;
    } else if (userName[0] === "D" || userName[0] === "d") {
        return `${giveNicknameWithLetterD()} ${userName}`;
    } else if (userName[0] === "E" || userName[0] === "e") {
        return `${giveNicknameWithLetterE()} ${userName}`;
    } else if (userName[0] === "F" || userName[0] === "f") {
        return `${giveNicknameWithLetterF()} ${userName}`;
    } else if (userName[0] === "G" || userName[0] === "g") {
        return `${giveNicknameWithLetterG()} ${userName}`;
    } else if (userName[0] === "H" || userName[0] === "h") {
        return `${giveNicknameWithLetterH()} ${userName}`;
    } else if (userName[0] === "I" || userName[0] === "i") {
        return `${giveNicknameWithLetterI()} ${userName}`;
    } else if (userName[0] === "J" || userName[0] === "j") {
        return `${giveNicknameWithLetterJ()} ${userName}`;
    } else if (userName[0] === "K" || userName[0] === "k") {
        return `${giveNicknameWithLetterK()} ${userName}`;
    } else if (userName[0] === "L" || userName[0] === "l") {
        return `${giveNicknameWithLetterL()} ${userName}`;
    } else if (userName[0] === "M" || userName[0] === "m") {
        return `${giveNicknameWithLetterM()} ${userName}`;
    } else if (userName[0] === "N" || userName[0] === "n") {
        return `${giveNicknameWithLetterN()} ${userName}`;
    } else if (userName[0] === "O" || userName[0] === "o") {
        return `${giveNicknameWithLetterO()} ${userName}`;
    } else if (userName[0] === "P" || userName[0] === "p") {
        return `${giveNicknameWithLetterP()} ${userName}`;
    } else if (userName[0] === "Q" || userName[0] === "q") {
        return `${giveNicknameWithLetterQ()} ${userName}`;
    } else if (userName[0] === "R" || userName[0] === "r") {
        return `${giveNicknameWithLetterR()} ${userName}`;
    } else if (userName[0] === "S" || userName[0] === "s") {
        return `${giveNicknameWithLetterS()} ${userName}`;
    } else if (userName[0] === "T" || userName[0] === "t") {
        return `${giveNicknameWithLetterT()} ${userName}`;
    } else if (userName[0] === "U" || userName[0] === "u") {
        return `${giveNicknameWithLetterU()} ${userName}`;
    } else if (userName[0] === "V" || userName[0] === "v") {
        return `${giveNicknameWithLetterV()} ${userName}`;
    } else if (userName[0] === "W" || userName[0] === "w") {
        return `${giveNicknameWithLetterW()} ${userName}`;
    } else if (userName[0] === "X" || userName[0] === "x") {
        return `${giveNicknameWithLetterX()} ${userName}`;
    } else if (userName[0] === "Y" || userName[0] === "y") {
        return `${giveNicknameWithLetterY()} ${userName}`;
    } else if (userName[0] === "Z" || userName[0] === "z") {
        return `${giveNicknameWithLetterZ()} ${userName}`;
    } else {
        return `Your name is already a challenge, dear ${userName}...`
    }
}

console.log(validate("a"));

