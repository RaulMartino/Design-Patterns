export abstract class HogwartsProfessor {
    protected successor: HogwartsProfessor | null = null;

    public setSuccessor(successor: HogwartsProfessor): void {
        this.successor = successor;
    }

    public abstract handleRequest(request: string): void;
}