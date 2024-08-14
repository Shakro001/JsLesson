"use strict";


const productsTitles = ['cheese', 'juice', 'bread', 'milk']
const productsPrices = [185, 100,500,120]
let productsAffordablePrice = []
const money = parseFloat(prompt('скільки у вас грошей?: '))

function findAvailableProducts(productsTitles, productsPrices, productsAffordablePrice, money){
    for(let i = 0; i<productsTitles.length; i++){
        if(money >= productsPrices[i]) productsAffordablePrice.push(productsTitles[i]);
        
    }
    
}
findAvailableProducts(
  productsTitles,
  productsPrices,
  productsAffordablePrice,
  money
);
document.write(` ви можете собі дозволити: ${productsAffordablePrice}`);
