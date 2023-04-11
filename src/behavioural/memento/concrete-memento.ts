import { Memento } from "./memento";

export class ConcreteMemento implements Memento {

    constructor(private name: string, private date: Date, private spells_learned: string) {}
    
    getName(): string {
        return this.name;
    }

    getDate(): Date {
        return this.date;
    }

    getSpellsLearned(): string {
        return this.spells_learned;
    }
}