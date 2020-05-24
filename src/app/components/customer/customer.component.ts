import { Customer } from './../../domain/customer.model';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/_services/cep.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customer: Customer;

  constructor(private cepService: CepService) {
    this.customer = new Customer();
  }

  onBlur(): void {
    if (this.customer.address.cep) {
      this.cepService.infoFromCep(this.customer.address.cep).subscribe(
        obj => {
          if (obj) {
            this.customer.address.city = obj.localidade;
            this.customer.address.district = obj.bairro;
            this.customer.address.street = obj.logradouro;
          }
        }
      );
    }
  }

}
