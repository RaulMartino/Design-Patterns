import { Context } from "./context";
import { Parser } from "./parser";

const context: Context = new Context("Lumos");
const parser: Parser = new Parser();
parser.parse(context); // lumos foi lançado

context.input = "Alohomora";
parser.parse(context); // ao mudar o contexto, foi alohomora que foi lançado
