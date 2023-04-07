import { ProductDecorator } from "./product-decorator";

export class SlytherinDecorator extends ProductDecorator {
    getPrice(): number {
        return this.product.getPrice() + 15;
    }

    getName(): string {
        return `${this.product.getName()} com símbolo da Sonserina e cor verde`;
    }
}