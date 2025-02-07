import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnlyLettersDirective } from '../../validators/only-letters.directive';
import { EmailValidatorDirective } from '../../validators/email-validator.directive';
import { EmailService } from '../../services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEmailSentComponent } from '../modal-email-sent/modal-email-sent.component';
import { Language } from '../../models/language.type';
import { TranslationsService } from '../../services/translations.service';
import { TranslatedTexts } from '../../models/translation-texts.interface';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, OnlyLettersDirective, EmailValidatorDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  currentLanguage: Language = 'en';
  contactForm!: FormGroup;
  private readonly _fb = inject(FormBuilder);
  private readonly _elRef = inject(ElementRef);
  private readonly _emailService = inject(EmailService);
  private readonly _translationsService = inject(TranslationsService);
  readonly dialog = inject(MatDialog);
  
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })    
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
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

  getTexts(lang: Language, type: string): string {
    const texts: TranslatedTexts = {
      en: {
        title: "Contact",
        description: "I would love to hear from you. Please fill in the form, and I’ll get back to you as soon as possible.",
        namePlaceholder: "NAME",
        emailPlaceholder: "EMAIL",
        messagePlaceholder: "MESSAGE",
        errorName: "Your name is required",
        errorEmail: "Your email address is required",
        invalidEmail: "Sorry, invalid format here",
        errorMessage: "Your message is required",
        button: "Send Message"
      },
      es: {
        title: "Contacto",
        description: "Estaré encantado de recibir tu mensaje. Completa el formulario y me pondré en contacto contigo a la brevedad.",
        namePlaceholder: "NOMBRE",
        emailPlaceholder: "EMAIL",
        messagePlaceholder: "MENSAJE",
        errorName: "El nombre es obligatorio",
        errorEmail: "Es necesario ingresar el correo electrónico",
        invalidEmail: "Formato inválido",
        errorMessage: "Es necesario escribir un mensaje",
        button: "Enviar mensaje"
      },
      pt: {
        title: "Contato",
        description: "Ficarei feliz em receber sua mensagem. Preencha o formulário abaixo e entrarei em contato o mais rápido possível.",
        namePlaceholder: "NOME",
        emailPlaceholder: "EMAIL",
        messagePlaceholder: "MENSAGEM",
        errorName: "O nome é obrigatório",
        errorEmail: "É necessário informar seu e-mail",
        invalidEmail: "Formato inválido",
        errorMessage: "Você precisa escrever uma mensagem",
        button: "Enviar mensagem"
      }
    }

    return texts[lang][type];
  }

  onSubmit(form: FormGroup) {
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

