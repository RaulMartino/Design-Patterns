import { IndividualWizard } from "./individual-wizard";
import { WizardGroup } from "./wizard-group";

const harry = new IndividualWizard("Harry Potter");
const ron = new IndividualWizard("Ron Weasley");
const hermione = new IndividualWizard("Hermione Granger");

const trio = new WizardGroup();
trio.addWizard(harry);
trio.addWizard(ron);
trio.addWizard(hermione);

const ginny = new IndividualWizard("Ginny Weasley");

const weasleys = new WizardGroup();
weasleys.addWizard(ron);
weasleys.addWizard(ginny);

const hogwarts = new WizardGroup();
hogwarts.addWizard(trio);
hogwarts.addWizard(weasleys);

hogwarts.castSpell();
