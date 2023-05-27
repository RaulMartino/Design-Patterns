export class ElderWizard {
    fullName: string;
    performMagic: () => void;
  
    constructor(fullName: string, performMagic: () => void) {
      this.fullName = fullName;
      this.performMagic = performMagic;
    }
}
  