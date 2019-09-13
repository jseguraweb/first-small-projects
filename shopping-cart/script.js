let jerseys = {
    manCity: {
        sizes: {
            small: `manCity S`,
            medium: `manCity M`,
            large: `manCity L`,
        },
        price: 89.90
    },
    liverpool: {
        sizes: {
            small: `liverpool S`,
            medium: `liverpool M`,
            large: `liverpool L`,
        },
        price: 87.90
    },
    tottenham: {
        sizes: {
            small: `tottenham S`,
            medium: `tottenham M`,
            large: `tottenham L`,
        },
        price: 85.90
    },
    manUnited: {
        sizes: {
            small: `manUnited S`,
            medium: `manUnited M`,
            large: `manUnited L`,
        },
        price: 91.90
    },
    chelsea: {
        sizes: {
            small: `chelsea S`,
            medium: `chelsea M`,
            large: `chelsea L`,
        },
        price: 82.90
    },
    arsenal: {
        sizes: {
            small: `arsenal S`,
            medium: `arsenal M`,
            large: `arsenal L`,
        },
        price: 84.90
    }
};

let pants = {
    nike: {
        sizes: {
            small: `nike S`,
            medium: `nike M`,
            large: `nike L`,
        },
        price: 29.90
    },
    adidas: {
        sizes: {
            small: `adidas S`,
            medium: `adidas M`,
            large: `adidas L`,
        },
        price: 24.50
    },
    puma: {
        sizes: {
            small: `puma S`,
            medium: `puma M`,
            large: `puma L`,
        },
        price: 26.80
    },
    newBalance: {
        sizes: {
            small: `newBalance S`,
            medium: `newBalance M`,
            large: `newBalance L`,
        },
        price: 25.50
    }
};

let socks = {
    red: {
        sizes: {
            small: `red S`,
            medium: `red M`,
            large: `red L`,
        },
        price: 14.90
    },
    blue: {
        sizes: {
            small: `blue S`,
            medium: `blue M`,
            large: `blue L`,
        },
        price: 12.90
    },
    white: {
        sizes: {
            small: `white S`,
            medium: `white M`,
            large: `white L`,
        },
        price: 15.70
    },
    black: {
        sizes: {
            small: `black S`,
            medium: `black M`,
            large: `black L`,
        },
        price: 16.90
    },
};

const shoppingList = () => {
    const shoppingCart = [];

    const add = (selectedItem) => {
        shoppingCart.push(selectedItem);

        console.log(`\nYou added one item to your shopping cart: ${selectedItem}`);
    };

    const remove = (index) => {
        if (shoppingCart[index]) {
            shoppingCart.splice(index, 1);
        } else {
            return `\nThis item doesn't exist`;
        }
        return `\nYou removed one item from your shopping cart: ${selectedItem}`;
    };

    const read = () => {
        const minimumIndex = shoppingCart[0];
        if (shoppingCart > minimumIndex) {
            return `\nThis is your current shopping cart: ${[...shoppingCart]}`;
        } else {
            return `Your shopping cart is empty`
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

addInCart(jerseys.liverpool.sizes.large);
addInCart(pants.newBalance.sizes.medium);
addInCart(socks.red.sizes.large);
addInCart(socks.red.sizes.medium);

console.log(readList());
