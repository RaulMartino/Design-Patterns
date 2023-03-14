import { TvCommand } from './command';
import { TV } from './tv';

export class TvPowerCommand implements TvCommand {
    constructor(private readonly tv: TV) {}

    execute(): void {
        this.tv.on();
    }

    undo(): void {
        this.tv.off();
    }
}