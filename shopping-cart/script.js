const milk = { name: "milk", price: 0.90 };
const chocolate = { name: "chocolate", price: 2.20 };
const coke = { name: "coke", price: 1.20 };
const salmon = { name: "salmon", price: 3.90 };
const bananas = { name: "bananas", price: 1.90 };
const broccoli = { name: "broccoli", price: 1.50 };
const butter = { name: "butter", price: 1.10 };
const cheese = { name: "cheese", price: 3.70 };

const shoppingList = () => {
    const shoppingCart = [];
    const finalPrice = [];

    let currentPrice = 0;

    const add = (selectedItem) => {
        const itemName = selectedItem.name;
        const itemPrice = selectedItem.price;

        shoppingCart.push(itemName);
        calculation(selectedItem);

        console.log(`\nYou added one item to your shopping cart: ${itemName} (${itemPrice}€)`);
    };

    const calculation = (itemInCart) => {
        const itemPrice = itemInCart.price;
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

addInCart(bananas);
addInCart(coke);
addInCart(salmon);
addInCart(cheese);

console.log(readList());
