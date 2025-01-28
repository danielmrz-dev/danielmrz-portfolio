import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnlyLettersDirective } from '../../validators/only-letters.directive';
import { EmailValidatorDirective } from '../../validators/email-validator.directive';
import { EmailService } from '../../services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEmailSentComponent } from '../modal-email-sent/modal-email-sent.component';

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
    private readonly _elRef: ElementRef,
    private readonly _emailService: EmailService,
    readonly dialog: MatDialog
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
    // this.dialog.open(ModalEmailSentComponent, {
    //   data: {
    //     name: this.name.value,
    //     status: 'error'
    //   },
    // })
    if (form.invalid) {
      form.markAllAsTouched()
      this.focusOnInvalidFields(form);
      return;
    }
    
    const dialogRef = this.dialog.open(ModalEmailSentComponent, {
      data: {
        name: this.name.value,
        status: 'sending'
      },
    })

    this._emailService.sendEmail(form.value)
      .then(() => {
        dialogRef.componentInstance.status = 'success'
        form.reset();
      })
      .catch(() => {
        dialogRef.componentInstance.status = 'error'
        form.reset();
      })
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

