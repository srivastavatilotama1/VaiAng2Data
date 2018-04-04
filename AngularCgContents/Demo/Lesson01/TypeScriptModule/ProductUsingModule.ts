import {IProduct} from "./Product";
import {company} from "./Product";
//Declare Product
let prod:IProduct={
        productId:1001,
       productName:"iPhone"
}
let productArray:IProduct[]=[
                {productId:1002,productName:"LG"},    
                {productId:1003,productName:"CoolPad"}, 
                {productId:1004,productName:"Mi"}, 
                        ];
console.log(prod.productId);
console.log(prod.productName);

for (let pro of productArray) {
    console.log(prod.productId);
    console.log(prod.productName);
}

console.log(company);