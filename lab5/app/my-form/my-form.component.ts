import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  get firstNameInvalid() {
    return this.myForm.get('firstName')?.invalid; 
  }

  get lastNameInvalid() {
    return this.myForm.get('lastName')?.invalid; 
  }

  get emailInvalid() {
    return this.myForm.get('email')?.invalid; 
  }

  get phoneInvalid() {
    return this.myForm.get('phone')?.invalid; 
  }

  submitForm() {
    if (this.myForm.valid) {
      this.formSubmitted.emit(this.myForm.value);
    } else {
      console.log('Form has errors');
    }
  }
}
