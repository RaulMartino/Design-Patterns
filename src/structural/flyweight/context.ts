import { Factory } from "./factory";

export const context = function (
    factory: Factory,
    name: string,
    year: number,
    house_name: string,
    common_room_location: string,
): void{
    const student = factory.enrollStudent({ house_name, common_room_location});
    student.hogsmeade_permission(name, year);
};