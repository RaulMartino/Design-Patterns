import { ConcreteMemento } from "./concrete-memento";
import { Memento } from "./memento";


export class Spellbook {

    constructor (private spells_learned: string){}

    learn_spell(spell: string): void{
        this.spells_learned = `${this.spells_learned}, ${spell}`;
    }

    save(): Readonly<Memento> {
        const date = new Date();
        const spells_saved = this.spells_learned;
        return new ConcreteMemento(date.toISOString(), date, spells_saved);
    }

    restore(memento: Memento): void {
        const concrete_memento = memento as ConcreteMemento;
        this.spells_learned = concrete_memento.getSpellsLearned();
    }
}