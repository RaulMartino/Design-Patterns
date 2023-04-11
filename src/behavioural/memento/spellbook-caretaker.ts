import { Memento } from "./memento";
import { Spellbook } from "./spellbook";

export class SpellbookCaretaker {

    private mementos: Memento[] = [];
    constructor(private readonly spellbook: Spellbook){}

    backup(): void {
        console.log(`Spellbook saved!`);
        this.mementos.push(this.spellbook.save());
    }

    undo(): void {
        const memento = this.mementos.pop();

        if(!memento) {
            console.log(`Spellbook is empty`);
            return;
        }

        this.spellbook.restore(memento);
        console.log(`${memento.getName()} was restored`);
    }

    showMementos(): void {
        console.log(this.mementos);
    }
}