import { Vehicle } from "./vehicle";

export class Motorcycle implements Vehicle{
    constructor(private name:string) {}

    pickUp(customerName: string): void {
        console.log(`${this.name} está indo buscar ${customerName}`);
    }
    stop(): void {
        console.log(`${this.name} parou`);
    }
}