import { Context } from "./context";
import { Expression } from "./expression";
import { Lumos, Alohomora } from "./spells";

export class Parser {
    private expression: Expression | null = null;
  
    public parse(context: Context): void {
      if (context.input.toLowerCase() === "lumos") {
        this.expression = new Lumos();
      } else if (context.input.toLowerCase() === "alohomora") {
        this.expression = new Alohomora();
      } else {
        console.log(`Invalid incantation: ${context.input}`);
        return;
      }
  
      this.expression.interpret(context);
    }
}
  