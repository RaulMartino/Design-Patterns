import { DiscountStrategy } from "./discount-strategy";
import { HoneyDukeProductProtocol } from "./honey-duke-product-protocol";

export class ShoppingCart {
    private products: HoneyDukeProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();


    addProduct(...products: HoneyDukeProductProtocol[]): void {
        products.forEach(product => this.products.push(product));
    }

    getProducts(): HoneyDukeProductProtocol[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }

    set discount(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }
}