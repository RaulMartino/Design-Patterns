import { DiscountStrategy } from "./discount-strategy";
import { ShoppingCart } from "./shopping-cart";

export class DefaultDiscount extends DiscountStrategy{
    
    protected discount = 0;

    getDiscount(cart: ShoppingCart): number {
        const total = cart.getTotal();

        if (total < 100) {
            this.discount = 2;
        } else if (total >= 100){
            this.discount = 20;
        }
    
        return total - total * (this.discount / 100);
    }
}
