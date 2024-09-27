
"use strict";


class Product {
    constructor(nameItem, quantity, nameFirm, regNum) {
        this.name = nameItem;
        this.quantityItem = quantity;
        this.firm = {
            nameFirm,
            registerNumber: regNum
        };
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    regItems(nameItem, quantity, nameFirm, regNum) {
        const newProduct = new Product(nameItem, quantity, nameFirm, regNum);
        this.products.push(newProduct);
    }
    filterByName(nameItem) {
        return this.products.filter(product => product.name === nameItem);
    }

}

const inventory = new Inventory();