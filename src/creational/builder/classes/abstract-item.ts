import { HogwartsKitCompositeProtocol } from "../interfaces/hogwarts-kit-composite-protocol";

export abstract class AbstractItem implements HogwartsKitCompositeProtocol {
    constructor(private house: string, private price: number){}

    getPrice(): number {
        return this.price;
    }
}