import { Address } from './address.model';
import { Student } from './student.model';
import { SchoolPrincipal } from './schoolPrincipal.model';
import { Teacher } from './teacher.model';
import { Grade } from './grade.model';

export class School {

    id: number;
    name: string;
    students: Array<Student>;
    cnpj: string;
    schoolPrincipal: SchoolPrincipal;
    teachers: Array<Teacher>;
    address: Address;
    grades: Array<Grade>;
}