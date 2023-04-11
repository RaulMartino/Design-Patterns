import { Dragon, Phoenix, Basilisk } from "./creatures";
import { Visitor } from "./visitor";

export class Hagrid implements Visitor {
    public visitDragon(dragon: Dragon): void {
      console.log(`Hagrid feeds ${dragon.name} a bucket of raw meat.`);
    }
  
    public visitPhoenix(phoenix: Phoenix): void {
      console.log(`Hagrid pets ${phoenix.name} and offers it a burning branch.`);
    }
  
    public visitBasilisk(basilisk: Basilisk): void {
      console.log(`Hagrid talks to ${basilisk.name} in Parseltongue and gives it a live chicken.`);
    }
}
  