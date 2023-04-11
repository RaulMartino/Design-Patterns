import { HouseType, StudentDictionary } from "./house-type";
import { Student } from "./student";
import { StudentFlyweight } from "./student-flyweight";

export class Factory {
    private students: StudentDictionary = {};

    private createId(data: HouseType): string {
        return Object.values(data)
        .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
        .join('_');
    }

    enrollStudent(intrinsicState: HouseType): StudentFlyweight {
        const key = this.createId(intrinsicState);
        if (key in this.students) 
            return this.students[key];
        this.students[key] = new Student(intrinsicState);
        return this.students[key];
    }

    getStudents(): StudentDictionary {
        return this.students;
    }
}