import { HogwartsKitCompositeProtocol } from "../interfaces/hogwarts-kit-composite-protocol";

export class HogwartsKit implements HogwartsKitCompositeProtocol {
    private readonly _children: HogwartsKitCompositeProtocol[] = [];

    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    add(...item: HogwartsKitCompositeProtocol[]): void {
        item.forEach((item) => this._children.push(item));
    }
}