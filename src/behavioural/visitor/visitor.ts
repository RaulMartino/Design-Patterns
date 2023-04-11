import { Dragon, Phoenix, Basilisk } from "./creatures";

export abstract class Visitor {
    public abstract visitDragon(dragon: Dragon): void;
    public abstract visitPhoenix(phoenix: Phoenix): void;
    public abstract visitBasilisk(basilisk: Basilisk): void;
}
  