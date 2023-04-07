import { ProductProtocol } from "./product-protocol";

export class Uniform implements ProductProtocol {
    private name = 'Uniforme';
    private preco = 90.00;

    getPrice(): number {
        return this.preco;
    }
    getName(): string {
        return this.name;
    }
}