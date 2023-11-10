import { v4 as uuidv4 } from 'uuid';

class Items {
    private _itemId: string = uuidv4()
    private _name: string
    private _price: number
    private _description: string

    constructor(name:string, price:number, description:string){
        this._itemId = uuidv4()
        this._name = name
        this._price = price
        this._description = description
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
    public get itemId(): string {
        return this._itemId;
    }
    public set itemId(value: string) {
        this._itemId = value;
    }

    }


class User {
    public get cart(): Items[] {
        return this._cart;
    }
    public set cart(value: Items[]) {
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
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    constructor(
        private _id: string = uuidv4(),
        private _name: string,
        private _age: number,
        private _cart: Items[] = []

    ){}

    addToCart(item:Items):void{
        this._cart.push(item);
    }
    removeFromCart(itemToRemove:Items): void{
        this._cart = this.cart.filter(item => item.itemId != itemToRemove.itemId)
    }
    removeQuantityFromCart(itemToRemove:Items,quantity:number): void {
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.itemId === itemToRemove.itemId)
            this.cart.splice(index,1)
            } 
        }
    getCartTotal():number {
            let total = 0;
            for (let item of this.cart){
                total += item.price
            }
            return total
        }
    printCart():void {
        console.log(`\n    ${this.name}'s CART\n`)
        for (let item of this.cart) {
            console.log('- - - - - - - - - - - - - - - - - - - - - - ')
        console.log(`ItemID: ${item.itemId}`)
        console.log(`Name: ${item.name}`)
        console.log(`Price: ${item.price}`)
        console.log(`Description: ${item.description}`)
        }
        console.log(`\nTotal: ${this.getCartTotal()}\n`)
}



}
class Shop {
    private _items: Items[];
    constructor(){
        this._items = [
            new Items('Yoga Mat', 20, 'Cushy Yoga mat with dog hair insulation'),
            new Items('Skateboard', 100, 'Sweet four wheel ride'),
            new Items('Keyboard', 50, 'bluetooth keyboard with roller ball mouse to browse from couch')
        ]
    }
    
    public get items(): Items[] {
        return this._items;
    }

    
}
const shop = new Shop()
const user = new User(uuidv4(), 'William Reeder', 37)
user.addToCart(shop.items[0])
user.addToCart(shop.items[0])
user.addToCart(shop.items[1])
user.addToCart(shop.items[1])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])

console.log("\n\n=============================================")
console.log("| | | | | | | | | | | | | | | | | | | | | | |")
console.log("=============================================")

user.printCart()

user.removeFromCart(shop.items[1])


console.log("\n\n=============================================")
console.log("| | | | | | | | | | | | | | | | | | | | | | |")
console.log("=============================================")

user.printCart()

console.log("\n\n=============================================")
console.log("| | | | | | | | | | | | | | | | | | | | | | |")
console.log("=============================================")

user.removeQuantityFromCart(shop.items[2], 2)
user.printCart()