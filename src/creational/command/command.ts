export interface TvCommand {
    execute(): void;
    undo(): void;
}