import { AdvancedSpell } from "./advanced-spell";
import { BasicSpell } from "./basic-spell";
import { Wand } from "./wand";

const wand = new Wand();
const basicSpell = new BasicSpell(wand);
const advancedSpell = new AdvancedSpell(wand);

basicSpell.cast();
basicSpell.increasePower();
console.log(`Wand power: ${wand.getPower()}`);

advancedSpell.cast();
advancedSpell.decreasePower();
console.log(`Wand power: ${wand.getPower()}`);
