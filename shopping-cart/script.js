const soyaMilk = { name: "soya milk", price: 1.80 };
const almondMilk = { name: "almond milk", price: 1.60 };
const fullFatMilk = { name: "full fat milk", price: 0.90 };
const saltedButter = { name: "salted butter", price: 1.10 };
const unsaltedButter = { name: "unsalted butter", price: 1.05 };
const salmon50gr = { name: "salmon 50 gr", price: 2.50 };
const salmon100gr = { name: "salmon 100 gr", price: 3.90 };
const darkChocolate = { name: "dark chocolate", price: 1.90 };
const milkChocolate = { name: "milk chocolate", price: 1.80 };
const almondChocolate = { name: "almond chocolate", price: 2.20 };
const cokeNormal = { name: "coke", price: 1.10 };
const cokeLight = { name: "coke light", price: 1.10 };
const cokeZero = { name: "coke zero", price: 1.10 };
const bananas = { name: "bananas", price: 1.90 };
const apples = { name: "apples", price: 1.50 };
const kiwis = { name: "kiwis", price: 1.60 };
const gorgonzola = { name: "gorgonzola", price: 2.90 };
const parmesan = { name: "parmesan", price: 3.70 };
const goatCheese = { name: "goat cheese", price: 3.20 };
const broccoli = { name: "broccoli", price: 1.30 };
const zucchini = { name: "zucchini", price: 0.80 };
const tomatoes = { name: "tomatoes", price: 1.40 };

const milk = [soyaMilk, almondMilk, fullFatMilk];
const butter = [saltedButter, unsaltedButter];
const salmon = [salmon50gr, salmon100gr];
const chocolate = [darkChocolate, milkChocolate, almondChocolate];
const coke = [cokeNormal, cokeLight, cokeZero];
const fruit = [bananas, apples, kiwis];
const cheese = [gorgonzola, parmesan, goatCheese];
const vegetables = [broccoli, zucchini, tomatoes];

const shoppingList = () => {
    const shoppingCart = [];
    const finalPrice = [];

    let currentPrice = 0;

    const add = (generalItem, specificItem) => {
        const itemName = generalItem[specificItem].name;
        const itemPrice = generalItem[specificItem].price;

        shoppingCart.push(itemName);
        calculation(generalItem, specificItem);

        console.log(`\nYou added one item to your shopping cart: ${itemName} (${itemPrice}€)`);
    };

    const calculation = (typeOfItem, itemInCart) => {
        const itemPrice = typeOfItem[itemInCart].price;
        currentPrice = currentPrice + itemPrice;

        finalPrice.splice(0, 1, currentPrice);
    }

    const remove = (index) => {
        if (shoppingCart[index]) {
            shoppingCart.splice(index, 1);
        } else {
            return `\nThis item doesn't exist`;
        }
        return `\nYou removed one item from your shopping cart: ${itemName}`;
    };

    const read = () => {
        const minimumIndex = shoppingCart[0];

        if (shoppingCart >= minimumIndex) {
            return `\nThis is your current shopping cart: ${[...shoppingCart]}\nThis is the current price: ${parseFloat([...finalPrice]).toFixed(2)} €`;
        } else {
            return `\nYour shopping cart is empty`
        }

    }

    const options = [add, remove, read];

    return options;
};

const myShoppingList = shoppingList();

const addInCart = myShoppingList[0];
const removeItem = myShoppingList[1];
const readList = myShoppingList[2];

console.log(readList());

addInCart(milk, 2);
addInCart(coke, 1);
addInCart(vegetables, 0);
addInCart(vegetables, 1);
addInCart(fruit, 1);
addInCart(fruit, 0);
addInCart(cheese, 0);
addInCart(chocolate, 0);
addInCart(salmon, 1);
addInCart(butter, 0);

console.log(readList());
