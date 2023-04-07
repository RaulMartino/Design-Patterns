import { HogwartsProfessor } from "./abstract-hogwarts-professor";

export class PotionsProfessor extends HogwartsProfessor {
    public handleRequest(request: string): void {
        if (request === 'problems with potions') {
            console.log('Potions Professor handled the problem');
        } else if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}

export class DefenseAgainstTheDarkArtsProfessor extends HogwartsProfessor {
    public handleRequest(request: string): void {
        if (request === 'Boggart attack') {
            console.log('Defense Against the Dark Arts Professor defeated the boggart');
        } else if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}

export class TransfigurationProfessor extends HogwartsProfessor {
    public handleRequest(request: string): void {
        if (request === 'A student turned accidentaly into a frog') {
            console.log('Transfiguration Professor turned the student into a human again');
        } else if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}