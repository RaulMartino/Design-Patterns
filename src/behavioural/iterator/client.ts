import { SpellBook } from "./spellbook";

const spellBook = new SpellBook();
spellBook.addSpell("Expelliarmus");
spellBook.addSpell("Wingardium Leviosa");
spellBook.addSpell("Expecto Patronum");
spellBook.addSpell("Crucio");
spellBook.addSpell("Imperio");
spellBook.addSpell("Avada Kedavra");


for (const spell of spellBook) {
  console.log(spell);
}

