import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
         Validators, AbstractControl, ValidatorFn} from '@angular/forms';

import { Customer } from './forms';

function ratingrange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} |null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return{ 'range': true};
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('Confirmemail');
    if (emailControl.pristine || confirmControl.pristine ) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return{'match': true};
}
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
            lastName: ['Methew', []],
            emailGroup: this.fb.group({
                email: ['a@a', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z0-9]+')]],
                Confirmemail: ['', [Validators.required]],
            }, {validator: emailMatcher }),
            rating: ['', ratingrange(1, 9)]
        });
    }

    popuplateData(): void {
        this.customerForm.patchValue({
            email: 'j@a'
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

      popuplateData(): void {
        this.customerForm.setValue({
            firstName: 'Ankit',
            lastName: 'Sharma',
            email: 'j@a'
        });
    }

  */
