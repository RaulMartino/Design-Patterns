export class SpellBook implements Iterable<string> {
    private spells: string[];
  
    constructor() {
      this.spells = [];
    }
  
    addSpell(spell: string) {
      this.spells.push(spell);
    }
  
    [Symbol.iterator](): Iterator<string> {
      let index = 0;
  
      return {
        next: () => {
          if (index < this.spells.length) {
            return { value: this.spells[index++], done: false };
          } else {
            return { value: null as unknown as string, done: true };
          }
        }
      };
    }
}