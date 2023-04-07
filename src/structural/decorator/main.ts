import { GryffindorDecorator } from "./product/gryffindor-decorator";
import { SlytherinDecorator } from "./product/slytherin-decorator";
import { Uniform } from "./product/uniform";

const uniform = new Uniform() ;
console.log(uniform.getName());
console.log(uniform.getPrice());

const griffyndorUniform = new GryffindorDecorator(uniform);
console.log(griffyndorUniform.getName());
console.log(griffyndorUniform.getPrice());


const slytherinDecorator = new SlytherinDecorator(uniform);
console.log(slytherinDecorator.getName());
console.log(slytherinDecorator.getPrice());

