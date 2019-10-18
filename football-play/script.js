class Player {

    constructor(firstName, lastName, day, month, year) {
        this.name = `${firstName} ${lastName}`;
        this.birthday = new Date(year, month - 1, day).toLocaleString("en-EN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        this.age = Math.floor((new Date() - new Date(year, month - 1, day)) / 31556952000);
    }

}

const jaime = new Player("Jaime", "Segura", 3, 8, 1988);

// const isOver18 = name => {
//     (name.birthday - 18 >= 18) ? true : false;
// };

console.log(jaime);

// console.log(isOver18(jaime));