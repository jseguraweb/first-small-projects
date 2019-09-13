const init = () => {
    let db = [];

    const create = (paramOne) => {
        db.push(paramOne);
        const dbArrayLength = db.length;

        return `New element added! The new length of the array is ${dbArrayLength}`;
    };

    const read = () => {
        let dbCopy = [...db];

        return dbCopy;
    };

    const update = (index, newElement) => {

        if (index >= 0 && index <= (db.length - 1)) {
            db[index] = newElement;
        } else {
            return create(newElement);
        }

        return db;
    };

    const remove = (deleteIndex) => {

        if (deleteIndex >= 0 && deleteIndex <= (db.length - 1)) {
            db.splice(deleteIndex, 1);
        } else {
            return `ERROR!!!`;
        }

        return db;
    };

    let api = [create, read, update, remove];

    return api;
};

const createInDb = init();

const createItem = createInDb[0];
const readArray = createInDb[1];
const updateItem = createInDb[2];
const removeItem = createInDb[3];

console.log(`\nChecking out what's in my database:`)
console.log(createInDb[1]());

createItem("Bread");
createItem("Butter");
createItem("Ham");
createItem("Cheese");

console.log(`\nChecking out my database after pushing 4 items inside it:`)
console.log(readArray()); // read

console.log(`\nI'm gonna push a new item ('Milk') inside the database:`)
console.log(createItem("Milk")); // 
console.log(readArray()); // read

console.log(`\nNow I'm gonna push another new item ('Banana') inside the database:`)
console.log(createItem("Banana"));
console.log(readArray()); // read

console.log(`\nNow I'm gonna update the first item: I'll change 'Bread' for 'Chocolate'`)
console.log(updateItem(0, "Chocolate"));
console.log(readArray()); // read

console.log(`\nNow I'm gonna update the third item: I'll change 'Ham' for 'Vanilla'`)
console.log(updateItem(2, "Vanilla"));
console.log(readArray()); // read

console.log(`\nI'm gonna delete the 'Cheese' (item 4 from my database)`)
console.log(removeItem(3)); // delete

console.log(`\nThis is the current status of my database:`)
console.log(readArray()); // read
