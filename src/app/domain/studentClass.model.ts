import { Student } from './student.model';
import { Teacher } from './teacher.model';
import { Grade } from './grade.model';

export class StudentClass {

    id: number;
    name: string;
    teachers: Array<Teacher>;
    students: Array<Student>;
    grade: Grade;
    
}