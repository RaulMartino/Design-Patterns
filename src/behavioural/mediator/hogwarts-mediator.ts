class HogwartsMediator implements IMediator {

    private gryffindor: GryffindorColleague; 
    private slytherin: SlytherinColleague;
  
    public setGryffindor(gryffindor: GryffindorColleague): void {
      this.gryffindor = gryffindor;
    }
  
    public setSlytherin(slytherin: SlytherinColleague): void {
      this.slytherin = slytherin;
    }
  
    public notify(sender: Colleague, event: string): void {
      if (sender instanceof GryffindorColleague) {
        console.log(`HogwartsMediator receives ${event} from GryffindorColleague`);
        this.slytherin.receive(event);
      } else if (sender instanceof SlytherinColleague) {
        console.log(`HogwartsMediator receives ${event} from SlytherinColleague`);
        this.gryffindor.receive(event);
      }
    }
}
  
  