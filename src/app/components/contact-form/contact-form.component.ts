import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnlyLettersDirective } from '../../validators/only-letters.directive';
import { EmailValidatorDirective } from '../../validators/email-validator.directive';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, OnlyLettersDirective, EmailValidatorDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup
  constructor(
    private readonly _fb: FormBuilder, 
    private readonly _elRef: ElementRef
  ) {}
  
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })    
  }

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      form.markAllAsTouched()
      this.focusOnInvalidFields(form);
      return;
    }
    form.reset();
  }

  focusOnInvalidFields(form: FormGroup) {
    const fields = Object.keys(form.controls)
    for (const field of fields) {
      if (form.controls[field].invalid) {
        const invalidField: HTMLElement = this._elRef.nativeElement.querySelector(`[formControlName="${field}"]`);
        invalidField.focus();
        break;
      }
    }
  }
}

