import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
         Validators} from '@angular/forms';

import { Customer } from './forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['John', [Validators.required, Validators.minLength(5)]],
            lastName: ['Methew']
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }



 /*
 this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        });
  */
