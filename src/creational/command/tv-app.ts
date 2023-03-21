import { TvCommand } from "./command";

export class TvApp {
    private commands: { [k: string]: TvCommand} = {};

    addCommand(key: string, command: TvCommand): void {
        this.commands[key] = command;
    }

    executeCommand(key: string): void {
        this.commands[key].execute();
    }

    undoCommand(key: string): void {
        this.commands[key].undo();
    }
}