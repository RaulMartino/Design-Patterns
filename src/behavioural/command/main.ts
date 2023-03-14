import { TV } from "./tv";
import { TvApp } from "./tv-app";
import { TvPowerCommand } from "./tv-power-command";

const tvSala = new TV('Tv da sala');
const tvSalaCommand = new TvPowerCommand(tvSala);
const tvApp = new TvApp();

tvApp.addCommand('btn-1', tvSalaCommand);

tvApp.executeCommand('btn-1');
tvApp.undoCommand('btn-1');


