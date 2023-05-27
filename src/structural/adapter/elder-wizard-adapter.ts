import { ElderWizard } from "./elder-wizard";
import { Wizard } from "./wizard";

export class ElderWizardAdapter implements Wizard {
    private elderWizard: ElderWizard;
  
    constructor(elderWizard: ElderWizard) {
      this.elderWizard = elderWizard;
    }
  
    get name(): string {
      return this.elderWizard.fullName;
    }
  
    castSpell(): void {
      this.elderWizard.performMagic();
    }
}
  