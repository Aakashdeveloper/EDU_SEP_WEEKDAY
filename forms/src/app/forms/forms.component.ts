import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  langauages = ['AngularJs', 'ReactJs', 'NodejS', 'Golang'];
  model = new Employee('John', '', '', '', '', true, '');
  hasCodelangError = false;
  disableSubmit = false;

  constructor(private _formPoster: FormPosterService) { }

  firstToUpper(value: string): void {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  validateCodeLang(event): void {
    if (this.model.codelang === 'default') {
      this.hasCodelangError = true;
      this.disableSubmit = true;
    } else {
      this.hasCodelangError = false;
      this.disableSubmit = false;
    }
  }
  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this._formPoster.postEmployee(form.value)
        .subscribe((data) => console.log('success', data));
  }

}



/*
pristine  valid     touched
dirty     invalid   untouched*/

