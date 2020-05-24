import { City } from './city.model';
import { Uf } from './uf.model';

export class Address {

    street: string;
    number: string;
    cep: string;
    district: string;
    city: City;
    uf: Uf;
}