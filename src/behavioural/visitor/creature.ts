import { Visitor } from "./visitor";

export abstract class Creature {
    constructor(public name: string) {}
    public abstract accept(visitor: Visitor): void;
}
  