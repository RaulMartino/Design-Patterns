import { DefenseAgainstTheDarkArtsProfessor, PotionsProfessor, TransfigurationProfessor } from "./concrete-professors";

const potionsProfessor = new PotionsProfessor();
const defenseAgainstTheDarkArtsProfessor = new DefenseAgainstTheDarkArtsProfessor();
const transfigurationProfessor = new TransfigurationProfessor();

potionsProfessor.setSuccessor(defenseAgainstTheDarkArtsProfessor);
defenseAgainstTheDarkArtsProfessor.setSuccessor(transfigurationProfessor);

potionsProfessor.handleRequest('A student turned accidentaly into a frog');
potionsProfessor.handleRequest('Boggart attack');
potionsProfessor.handleRequest('problems with potions');
potionsProfessor.handleRequest('unknown request');
