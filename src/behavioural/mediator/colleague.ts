abstract class Colleague {
  protected mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  public abstract send(event: string): void;
  public abstract receive(event: string): void;
}
