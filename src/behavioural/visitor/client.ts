import { Dragon, Phoenix, Basilisk } from "./creatures";
import { Hagrid } from "./hagrid";

const norbert: Dragon = new Dragon("Norbert");
norbert.accept(new Hagrid());

const fawkes: Phoenix = new Phoenix("Fawkes");
fawkes.accept(new Hagrid());

const basilisk: Basilisk = new Basilisk("Basilisk");
basilisk.accept(new Hagrid());
