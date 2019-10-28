/**
 * 
 * 
 * CLASSES:
 * 
 * 
 */

class Item {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    add(itemNew, quantity = 1) {
        const itemFound = this.items.find(item => item.name == itemNew.name);

        if (itemFound) {
            itemFound.quantity += quantity
        }
        else {
            this.items.push({ ...itemNew, quantity })
        }

    }

    readList() {

        return this.items;
    }

    howManyItems() {
        let amountOfItems = this.items.reduce((totalAmount, element) => totalAmount += element.quantity, 0);

        if (amountOfItems === 0) { return `your shopping cart is empty` }
        else if (amountOfItems < 2) { return `you have ${this.items.length} item in your shopping cart` }
        return `you have ${amountOfItems} items in your shopping cart`;
    }

    totalPrice(shipping = 3.75) {
        const pricePerElement = this.items.map(element => element.price * element.quantity);
        const total = pricePerElement.reduce((total, element) => total += element, 0).toFixed(2);
        const totalWithShippingCosts = parseFloat(total) + shipping;
        if (total >= 20) { return `the total price is: ${total}€` }
        return `the total price is: ${totalWithShippingCosts}€ (${total}€ + ${shipping}€ shipping costs)`;
    }
}

/** 
 * 
 * 
 * INGREDIENTS:
 * 
 * 
 * */

const soyaMilk = new Item("soya milk", 1.80, "milk");
const almondMilk = new Item("almond milk", 1.60, "milk");
const fullFatMilk = new Item("full fat milk", 0.90, "milk");
const saltedButter = new Item("salted butter", 1.10, "butter");
const unsaltedButter = new Item("unsalted butter", 1.05, "butter");
const salmon50gr = new Item("salmon 50 gr", 2.50, "salmon");
const salmon100gr = new Item("salmon 100 gr", 3.90, "salmon");
const darkChocolate = new Item("dark chocolate", 1.90, "chocolate");
const milkChocolate = new Item("milk chocolate", 1.80, "chocolate");
const almondChocolate = new Item("almond chocolate", 2.20, "chocolate");
const cokeNormal = new Item("coke", 1.10, "coke");
const cokeLight = new Item("coke light", 1.10, "coke");
const cokeZero = new Item("coke zero", 1.10, "coke");
const bananas = new Item("bananas", 1.90, "fruit");
const apples = new Item("apples", 1.50, "fruit");
const kiwis = new Item("kiwis", 1.60, "fruit");
const gorgonzola = new Item("gorgonzola", 2.90, "cheese");
const parmesan = new Item("parmesan", 3.70, "cheese");
const goatCheese = new Item("goat cheese", 3.20, "cheese");
const broccoli = new Item("broccoli", 1.30, "vegetable");
const zucchini = new Item("zucchini", 0.80, "vegetable");
const tomatoes = new Item("tomatoes", 1.40, "vegetable");

/**
 * 
 * 
 * CREATE YOUR NEW ORDER/S:
 * 
 * 
 */

const jaimeList = new Order("Jaime");

const peterList = new Order("Peter");

/**
 * 
 * 
 * GO SHOPPING:
 * 
 * 
 */

jaimeList.add(tomatoes);
jaimeList.add(tomatoes);
jaimeList.add(broccoli);
jaimeList.add(cokeZero);

peterList.add(zucchini);
peterList.add(gorgonzola);
peterList.add(broccoli, 2);
peterList.add(cokeZero);
peterList.add(gorgonzola);
peterList.add(darkChocolate, 3);
peterList.add(bananas, 4);
peterList.add(salmon100gr, 2);

/**
 * 
 * 
 * CHECK YOUR SHOPPING CART:
 * 
 * 
 */

console.log(`\n${jaimeList.name}, this is your current shopping cart:\n`, jaimeList.readList());
console.log(`\n${jaimeList.name},`, jaimeList.howManyItems());

// console.log(`\n${peterList.name}, this is your current shopping cart:\n`, peterList.readList());
// console.log(`\n${peterList.name},`, peterList.howManyItems());

/**
 * 
 * 
 * PAYMENT: 
 * 
 *  
 */

console.log(`\n${jaimeList.name},`, jaimeList.totalPrice(), `\n`);

// console.log(`\n${peterList.name},`, peterList.totalPrice(), `\n`);
