import { GryffindorKitBuilder } from "./classes/gryffindor-kit-builder";

const gryffindorKitBuilder = new GryffindorKitBuilder();
gryffindorKitBuilder.prepareKit();
console.log(gryffindorKitBuilder.getPrice());
console.log(gryffindorKitBuilder.getKit());