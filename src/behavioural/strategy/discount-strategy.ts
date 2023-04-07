import { ShoppingCart } from "./shopping-cart";

export class DiscountStrategy {
    protected discount = 0;

    getDiscount(cart: ShoppingCart): number {
        return cart.getTotal();
    }
}