"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
//Declare Product
let prod = {
    productId: 1001,
    productName: "iPhone"
};
let productArray = [
    { productId: 1002, productName: "LG" },
    { productId: 1003, productName: "CoolPad" },
    { productId: 1004, productName: "Mi" },
];
console.log(prod.productId);
console.log(prod.productName);
for (let pro of productArray) {
    console.log(prod.productId);
    console.log(prod.productName);
}
console.log(Product_1.company);
