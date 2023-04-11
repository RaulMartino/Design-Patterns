import { Context } from "./context";
import { Expression } from "./expression";

export class Lumos extends Expression {
    public interpret(context: Context): void {
      console.log(`Lumos ${context.output}`);
    }
}
  
export class Alohomora extends Expression {
    public interpret(context: Context): void {
      console.log(`Alohomora ${context.output}`);
    }
}  