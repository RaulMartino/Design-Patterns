import { Context } from "./context";

export abstract class Expression {
    public abstract interpret(context: Context): void;
}
  