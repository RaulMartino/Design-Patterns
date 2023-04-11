import { Spellbook } from "./spellbook";
import { SpellbookCaretaker } from "./spellbook-caretaker";

const spellbook = new Spellbook('Lumos');
const spellbook_caretaker =  new SpellbookCaretaker(spellbook);

spellbook_caretaker.backup(); //salvou o livro com lumos no primeiro backup
console.log(spellbook); //mostrou que aprendeu lumos

spellbook.learn_spell('Accio'); //aprendeu accio
spellbook.learn_spell('Reparo'); //aprendeu reparo
console.log(spellbook); //lista lumos, accio e reparo

spellbook_caretaker.undo(); //volta pro primeiro backup
console.log(spellbook); //lista apenas lumos

spellbook.learn_spell('Expelliarmus'); //aprendeu expelliarmus
spellbook_caretaker.backup(); //salvou o livro com lumos e expelliarmus no segundo backup 
console.log(spellbook); // lista lumos e expelliarmus

spellbook.learn_spell('Avada kedavra'); //aprendeu avada kedavra
console.log(spellbook); // lista lumos, expelliarmus e avada kedavra

spellbook_caretaker.undo(); //volta pro segundo backup
console.log(spellbook); // lista lumos e expelliarmus










