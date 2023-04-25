class SlytherinColleague extends Colleague {
    constructor(mediator: IMediator) {
      super(mediator);
    }
  
    public send(event: string): void {
      console.log(`SlytherinColleague sends ${event}`);
      this.mediator.notify(this, event);
    }
  
    public receive(event: string): void {
      console.log(`SlytherinColleague receives ${event}`);
    }
}
  