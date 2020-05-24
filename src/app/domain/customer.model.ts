import { User } from './user.model';
import { Address } from './address.model';
import { TypeCustomer } from './enum/typeCustomer.enum';

export class Customer extends User {

    address: Address;
    typeCustomer: TypeCustomer;

    constructor() {
        super();
        this.address = new Address();
    }
}
