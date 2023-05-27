import { ElderWizard } from "./elder-wizard";
import { ElderWizardAdapter } from "./elder-wizard-adapter";
import { Wizard } from "./wizard";

const dumbledore = new ElderWizard("Alvo Dumbledore", () => console.log("Expecto Patronum!"));
const dumbledoreWizard: Wizard = new ElderWizardAdapter(dumbledore);
console.log(dumbledoreWizard.name);
dumbledoreWizard.castSpell();