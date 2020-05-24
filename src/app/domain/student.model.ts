import { Address } from './address.model';
import { User } from './user.model';
import { StudentClass } from './studentClass.model';
import { SchoolHours } from './schoolHours.model';
import { Genre } from './enum/genre.enum';

export class Student extends User {
    
    studentClass: StudentClass;
    schoolHours: SchoolHours;
    genre: Genre;
    birthDate: Date;
    phone: string;
    address: Address;
    fatherName: string;
    motherName: string;
    registrationNumber: string;
    
}