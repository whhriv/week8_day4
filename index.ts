import { v4 as uuidv4 } from 'uuid';

class Items {
    private _itemId: string = uuidv4()
    private _name: string
    private _price: number
    private _description: string
    


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
    constructor(){
        this._itemId = uuidv4()
        this._name = Items.name
        this._price = this.price
        this._description = description
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

    function addToCart(item:Items):void{
        this._cart.push(item);
    }
    function removeFromCart(item:Items): void{
        this._cart = this.cart.filter(item => item.itemId != itemToRemove.itemId)
    }
    function removeQuantityFromCart(itemToRemove:Items,quantity:number): void {
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.itemId === itemToRemove.itemId)
            this.cart.splice(index,1)
            } 
        }
    function getCartTotal():number {
            let total = 0;
            for (let item of this.cart){
                total += item.price
            }
            return total
        }
    function printCart():void {
        console.log(`Here is what is in your cart, ${this.name}:`)
        for (let item of this.cart) {
            console.log(`${item.name}: $${item.price}`)
        }
        console.log(`total: ${this.getCartTotal()}`)
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

addToCart(user, item)

