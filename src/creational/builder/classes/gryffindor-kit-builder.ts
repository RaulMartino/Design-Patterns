import { KitBuilderProtocol } from "../interfaces/kit-builder-protocol";
import { HogwartsKit } from "./hogwarts-kit";
import { Uniform, Wand, Broom } from "./itens";

export class GryffindorKitBuilder implements KitBuilderProtocol {
    private _kit: HogwartsKit = new HogwartsKit;
    gryffindor = 'Gryffindor';

    reset(): this {
        this._kit = new HogwartsKit();
        return this;
    }
    prepareKit(): this {
        const uniform = new Uniform(this.gryffindor, 150);
        const wand = new Wand(this.gryffindor, 650);
        const broom = new Broom(this.gryffindor, 1500);
        this._kit.add(uniform, wand, broom);
        return this;
    }

    getKit(): HogwartsKit {
        return this._kit;
    }
    getPrice(): number {
        return this._kit.getPrice();
    }
}