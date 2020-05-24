import { Subject } from './subject.model';
import { User } from './user.model';

export class Teacher extends User {

    subjects: Array<Subject>;
}