class Player {

    constructor(firstName, lastName, day, month, year) {
        this.name = `${firstName} ${lastName}`;
        this.birthday = new Date(year, month - 1, day).toLocaleString("en-EN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        this.age = Math.floor((new Date() - new Date(year, month - 1, day)) / 31556952000);
    }

    hideFingers() {


        return hiddenFingers;
    }

    // guessFingers() {

    // }

}

class Game {

    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        return `${playerOne} is going to play against ${playerTwo}`
    }

    whoStarts() {
        const num = Math.floor(Math.random() * 2);
        const playerStarts = (num === 0) ? this.playerOne.name : this.playerTwo.name;
        return `${playerStarts} starts`;
    }

    // announceWinner() {

    // }

    // play() {

    // }

}

const jaime = new Player("Jaime", "Segura", 3, 8, 1988);
const peter = new Player("Peter", "Griffin", 27, 5, 1970);
const roundOne = new Game(jaime, peter);

console.log(jaime);
console.log(peter);

console.log(roundOne.whoStarts());

