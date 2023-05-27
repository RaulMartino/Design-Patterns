import { Spell } from "./spell";

const avadaKedavra = new Spell("Avada Kedavra", 100);
const expelliarmus = avadaKedavra.clone() as Spell;

console.log(expelliarmus.name);
console.log(expelliarmus.power);

expelliarmus.name = "Expelliarmus";
expelliarmus.power = 50;

console.log(avadaKedavra.name); 
console.log(avadaKedavra.power);
console.log(expelliarmus.name); 
console.log(expelliarmus.power);
