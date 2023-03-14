import { Subsistema1 } from './subsistemas/subsistema1';
import { Subsistema2 } from './subsistemas/subsistema2';
import { Subsistema3 } from './subsistemas/subsistema3';

export class FazedorCervejaFacade {
    
    subsistema1 = new Subsistema1();
    subsistema2 = new Subsistema2();
    subsistema3 = new Subsistema3();

    public fazerCervejaAmanteigada(): string{
        let text = this.subsistema1.prepararIngredientes();
        text += this.subsistema2.prepararCervejaAmanteigada();
        text += this.subsistema3.servirCerveja();
        console.log(text);
        return 'cerveja preparada e servida!'
    }
}