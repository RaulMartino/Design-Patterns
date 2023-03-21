import { CarFactory } from "./factories/car-factory";

const car_factory = new CarFactory();
const ferrari = car_factory.getVehicle('Ferrari');
ferrari.pickUp('Gina');
ferrari.stop();