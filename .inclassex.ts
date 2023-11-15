import {v4 as uuidv4} from 'uuid';
​
​
class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4()
    ){}
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}
​
class User {
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){}
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
​
    public addToCart(item:Item):void{
        this.cart.push(item)
    }
​
    public removeFromCart(itemToRemove:Item):void{
        this.cart = this.cart.filter( item => item.id !== itemToRemove.id )
    }
​
    public removeQuantityFromCart(itemToRemove:Item, quantity:number):void{
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }
​
    public getCartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        }
        return total
    }
​
    public printCart():void{
        console.log(`Here is what is in your cart, ${this.name}:`)
        for (let item of this.cart){
            console.log(`${item.name}: $${item.price}`)
        }
        console.log(`Total: $${this.getCartTotal()}`)
    }
}
​
​
class Shop {
    constructor(
        private _items: Item[] = []
    ){
        let itemA = new Item('Notebook', 10, 'Keep all of your notes in one handy place');
        this.items.push(itemA);
​
        let itemB = new Item('Socket Wrench', 20, 'Tools');
        this.items.push(itemB);
​
        let itemC = new Item('Blanket', 30, 'Stay warm and cozy');
        this.items.push(itemC);
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
}
​
​
// Driver Code
let myShop = new Shop();
let myUser = new User('Fred', 55);
// Add 1 itemA to the user
myUser.addToCart(myShop.items[0]);
myUser.printCart();
​
console.log('=====================================================');
​
// Add 3 of itemB to the user
myUser.addToCart(myShop.items[1]);
myUser.addToCart(myShop.items[1]);
myUser.addToCart(myShop.items[1]);
myUser.printCart();
​
console.log('=====================================================');
​
// Add 4 of itemC to the user
myUser.addToCart(myShop.items[2]);
myUser.addToCart(myShop.items[2]);
myUser.addToCart(myShop.items[2]);
myUser.addToCart(myShop.items[2]);
myUser.printCart();
​
console.log('=====================================================');
​
// Remove all of itemB
myUser.removeFromCart(myShop.items[1]);
myUser.printCart();
​
console.log('=====================================================');
​
// Remove 2 of itemC
myUser.removeQuantityFromCart(myShop.items[2], 2);
myUser.printCart();