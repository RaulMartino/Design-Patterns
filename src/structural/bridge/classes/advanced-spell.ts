import { MagicDevice } from "../interfaces/magic-device-protocol";
import { Spell } from "../interfaces/spell-protocol";

export class AdvancedSpell implements Spell {
    constructor(protected device: MagicDevice) {}

    public cast(): void {
        console.log(`Casting advanced spell with power level ${this.device.getPower()}...`);
    }

    public increasePower(): void {
        const currentPower = this.device.getPower();
        if (currentPower < 100) {
            this.device.setPower(currentPower + 20);
        }
    }

    public decreasePower(): void {
        const currentPower = this.device.getPower();
        if (currentPower > 0) {
            this.device.setPower(currentPower - 20);
        }
    }
}