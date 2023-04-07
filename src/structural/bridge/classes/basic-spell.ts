import { Spell } from "../interfaces/spell-protocol";

export class BasicSpell implements Spell {
    constructor(protected device: MagicDevice) {}

    public cast(): void {
        console.log(`Casting spell with power level ${this.device.getPower()}...`);
    }

    public increasePower(): void {
        const currentPower = this.device.getPower();
        if (currentPower < 100) {
            this.device.setPower(currentPower + 10);
        }
    }

    public decreasePower(): void {
        const currentPower = this.device.getPower();
        if (currentPower > 0) {
            this.device.setPower(currentPower - 10);
        }
    }
}
import { MagicDevice } from "../interfaces/magic-device-protocol";
