import { Address } from './address.model';
import { User } from './user.model';

export class SchoolPrincipal extends User {

    school: School;
    address: Address;
}