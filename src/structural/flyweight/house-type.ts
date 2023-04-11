import { Student } from "./student";

export type HouseType = {
    readonly house_name: string;
    readonly common_room_location: string;
};

export type StudentDictionary = { [k: string]: Student}