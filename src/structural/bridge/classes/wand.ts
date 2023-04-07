import { MagicDevice } from "../interfaces/magic-device-protocol";

export class Wand implements MagicDevice {
    private enchanted: boolean = false;
    private power: number = 50;

    public isEnchanted(): boolean {
        return this.enchanted;
    }

    public enchant(): void {
        this.enchanted = true;
    }

    public disenchant(): void {
        this.enchanted = false;
    }

    public getPower(): number {
        return this.power;
    }

    public setPower(percent: number): void {
        this.power = percent;
    }
}