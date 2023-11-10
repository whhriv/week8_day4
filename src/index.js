"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Items {
    constructor(name, price, description) {
        this._itemId = (0, uuid_1.v4)();
        this._itemId = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get itemId() {
        return this._itemId;
    }
    set itemId(value) {
        this._itemId = value;
    }
}
class User {
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    constructor(_id = (0, uuid_1.v4)(), _name, _age, _cart = []) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    addToCart(item) {
        this._cart.push(item);
    }
    removeFromCart(itemToRemove) {
        this._cart = this.cart.filter(item => item.itemId != itemToRemove.itemId);
    }
    removeQuantityFromCart(itemToRemove, quantity) {
        for (let i = 0; i < quantity; i++) {
            let index = this.cart.findIndex(item => item.itemId === itemToRemove.itemId);
            this.cart.splice(index, 1);
        }
    }
    getCartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        console.log(`\n    ${this.name}'s CART\n`);
        for (let item of this.cart) {
            console.log('- - - - - - - - - - - - - - - - - - - - - - ');
            console.log(`ItemID: ${item.itemId}`);
            console.log(`Name: ${item.name}`);
            console.log(`Price: ${item.price}`);
            console.log(`Description: ${item.description}`);
        }
        console.log(`\nTotal: ${this.getCartTotal()}\n`);
    }
}
class Shop {
    constructor() {
        this._items = [
            new Items('Yoga Mat', 20, 'Cushy Yoga mat with dog hair insulation'),
            new Items('Skateboard', 100, 'Sweet four wheel ride'),
            new Items('Keyboard', 50, 'bluetooth keyboard with roller ball mouse to browse from couch')
        ];
    }
    get items() {
        return this._items;
    }
}
const shop = new Shop();
const user = new User((0, uuid_1.v4)(), 'William Reeder', 37);
user.addToCart(shop.items[0]);
user.addToCart(shop.items[0]);
user.addToCart(shop.items[1]);
user.addToCart(shop.items[1]);
user.addToCart(shop.items[2]);
user.addToCart(shop.items[2]);
user.addToCart(shop.items[2]);
console.log("\n\n=============================================");
console.log("| | | | | | | | | | | | | | | | | | | | | | |");
console.log("=============================================");
user.printCart();
user.removeFromCart(shop.items[1]);
console.log("\n\n=============================================");
console.log("| | | | | | | | | | | | | | | | | | | | | | |");
console.log("=============================================");
user.printCart();
console.log("\n\n=============================================");
console.log("| | | | | | | | | | | | | | | | | | | | | | |");
console.log("=============================================");
user.removeQuantityFromCart(shop.items[2], 2);
user.printCart();
