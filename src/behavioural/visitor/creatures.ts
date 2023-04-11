import { Creature } from "./creature";
import { Visitor } from "./visitor";

export class Dragon extends Creature {
    public accept(visitor: Visitor): void {
      visitor.visitDragon(this);
    }
}
  
export class Phoenix extends Creature {
    public accept(visitor: Visitor): void {
      visitor.visitPhoenix(this);
    }
}
  
export class Basilisk extends Creature {
    public accept(visitor: Visitor): void {
      visitor.visitBasilisk(this);
    }
}
  