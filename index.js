"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Items = /** @class */ (function () {
    function Items(name, price, description) {
        this._itemId = (0, uuid_1.v4)();
        this._itemId = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    Object.defineProperty(Items.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "itemId", {
        get: function () {
            return this._itemId;
        },
        set: function (value) {
            this._itemId = value;
        },
        enumerable: false,
        configurable: true
    });
    return Items;
}());
var User = /** @class */ (function () {
    function User(_id, _name, _age, _cart) {
        if (_id === void 0) { _id = (0, uuid_1.v4)(); }
        if (_cart === void 0) { _cart = []; }
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    Object.defineProperty(User.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.addToCart = function (item) {
        this._cart.push(item);
    };
    User.prototype.removeFromCart = function (itemToRemove) {
        this._cart = this.cart.filter(function (item) { return item.itemId != itemToRemove.itemId; });
    };
    User.prototype.removeQuantityFromCart = function (itemToRemove, quantity) {
        for (var i = 0; i < quantity; i++) {
            var index = this.cart.findIndex(function (item) { return item.itemId === itemToRemove.itemId; });
            this.cart.splice(index, 1);
        }
    };
    User.prototype.getCartTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.price;
        }
        return total;
    };
    User.prototype.printCart = function () {
        console.log("\n    ".concat(this.name, "'s CART\n"));
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log('- - - - - - - - - - - - - - - - - - - - - - ');
            console.log("ItemID: ".concat(item.itemId));
            console.log("Name: ".concat(item.name));
            console.log("Price: ".concat(item.price));
            console.log("Description: ".concat(item.description));
        }
        console.log("\nTotal: ".concat(this.getCartTotal(), "\n"));
    };
    return User;
}());
var Shop = /** @class */ (function () {
    function Shop() {
        this._items = [
            new Items('Yoga Mat', 20, 'Cushy Yoga mat with dog hair insulation'),
            new Items('Skateboard', 100, 'Sweet four wheel ride'),
            new Items('Keyboard', 50, 'bluetooth keyboard with roller ball mouse to browse from couch')
        ];
    }
    Object.defineProperty(Shop.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    return Shop;
}());
var shop = new Shop();
var user = new User((0, uuid_1.v4)(), 'William Reeder', 37);
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
