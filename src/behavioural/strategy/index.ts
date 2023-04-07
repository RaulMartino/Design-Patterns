import { DefaultDiscount } from "./default-discount";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({name: 'Sapo de chocolate', price: 100});
shoppingCart.addProduct({name: 'Feijões de todos os sabores', price: 50});

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
