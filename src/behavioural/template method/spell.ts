export abstract class Spell {
    cast() {
      this.prepareIngredients();
      this.doIncantation();
      this.performMagic();
    }
  
    protected abstract prepareIngredients(): void;
  
    protected abstract doIncantation(): void;
  
    protected abstract performMagic(): void;
}
  