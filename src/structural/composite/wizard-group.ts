import { Wizard } from "./wizard-interface";

export class WizardGroup implements Wizard {
    private wizards: Wizard[] = [];
  
    addWizard(wizard: Wizard): void {
      this.wizards.push(wizard);
    }
  
    removeWizard(wizard: Wizard): void {
      const index = this.wizards.indexOf(wizard);
      if (index !== -1) {
        this.wizards.splice(index, 1);
      }
    }
  
    castSpell(): void {
      console.log("Wizard group casts a spell...");
      this.wizards.forEach((wizard) => wizard.castSpell());
    }
}
  