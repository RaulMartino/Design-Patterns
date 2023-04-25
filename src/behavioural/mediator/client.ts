const mediator = new HogwartsMediator();

const gryffindorColleague = new GryffindorColleague(mediator);
mediator.setGryffindor(gryffindorColleague);

const slytherinColleague = new SlytherinColleague(mediator);
mediator.setSlytherin(slytherinColleague);

gryffindorColleague.send("Quidditch match starting");
slytherinColleague.send("We're going to win");
