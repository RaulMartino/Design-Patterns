import { Spell } from "./spell";

export class WingardiumLeviosaSpell extends Spell {
    protected prepareIngredients() {
      console.log("Preparing wand and feather");
    }
  
    protected doIncantation() {
      console.log("Saying 'Wingardium Leviosa'");
    }
  
    protected performMagic() {
      console.log("Levitating the object");
    }
}
  
export class ExpelliarmusSpell extends Spell {
    protected prepareIngredients() {
      console.log("Preparing wand");
    }
  
    protected doIncantation() {
      console.log("Saying 'Expelliarmus'");
    }
  
    protected performMagic() {
      console.log("Opponent disarmed!");
    }
}  