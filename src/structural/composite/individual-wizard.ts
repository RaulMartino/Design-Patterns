import { Wizard } from "./wizard-interface";

export class IndividualWizard implements Wizard {
    constructor(private name: string) {}
  
    castSpell(): void {
      console.log(`${this.name} casts a spell!`);
    }
}
  