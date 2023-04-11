import { HouseType } from "./house-type";
import { StudentFlyweight } from "./student-flyweight";

export class Student implements StudentFlyweight {
    constructor(private readonly sharedState: HouseType) {}

    hogsmeade_permission(name: string, year: number): void {
        if(year >= 3){
            console.log(`${name}, ${year}th year, from ${this.sharedState.house_name}, has permission to go to hogsmeade`);
        }
        else
        {
            console.log(`${name}, ${year}st year, from ${this.sharedState.house_name}, does not have the permission to go to hogsmeade`);
        }
    }
}