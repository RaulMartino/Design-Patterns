import { context } from "./context";
import { Factory } from "./factory";

const factory = new Factory();
context(factory, 'Harry', 4 ,'Gryffindor', 'Faculty Tower');
context(factory, 'Hermione', 4 ,'Gryffindor', 'Faculty Tower');
context(factory, 'Dennis Creevey', 1 ,'Gryffindor', 'Faculty Tower');
context(factory, 'Cedric', 7 ,'Hufflepuff', 'Beneath the Great Hall');

console.log(factory.getStudents());
