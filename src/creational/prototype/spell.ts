import { Prototype } from "./prototype";

export class Spell implements Prototype {
    name: string;
    power: number;
  
    constructor(name: string, power: number) {
      this.name = name;
      this.power = power;
    }
  
    clone(): Prototype {
      return new Spell(this.name, this.power);
    }
  }
  