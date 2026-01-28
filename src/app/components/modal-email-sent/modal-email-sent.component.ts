import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IFormData } from '../../models/form-data.interface';
import { CommonModule } from '@angular/common';
import { ButtonWithBorderBottomComponent } from '../button-with-border-bottom/button-with-border-bottom.component';
import { TranslationsService } from '../../services/translations.service';
import { Language } from '../../models/language.type';
import { TranslatedTexts } from '../../models/translation-texts.interface';

@Component({
  selector: 'app-modal-email-sent',
  standalone: true,
  imports: [
    MatDialogContent,
    CommonModule,
    MatDialogClose,
    MatProgressSpinnerModule,
    ButtonWithBorderBottomComponent,
  ],
  templateUrl: './modal-email-sent.component.html',
  styleUrl: './modal-email-sent.component.scss',
})
export class ModalEmailSentComponent {
  status: string;
  currentLanguage: Language = 'en';
  readonly _translationsService = inject(TranslationsService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: IFormData) {
    this.status = data['status'] as string;
    this._translationsService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  getTexts(lang: Language, type: string): string {
    const texts: TranslatedTexts = {
      en: {
        hi: 'Hello, ',
        messageSent: 'Your message has been sent!',
        contact: 'I will get back to you shortly!',
        sending: 'Sending...',
        error: 'Sorry! We were unable to send your message!',
        close: 'Close',
      },
      es: {
        hi: 'Hola, ',
        messageSent: '¡Tu mensaje ha sido enviado!',
        contact: 'Te contactaré pronto.',
        sending: 'Enviando...',
        error: '¡Lo siento! No pudimos enviar tu mensaje.',
        close: 'Cerrar',
      },
      pt: {
        hi: 'Olá, ',
        messageSent: 'Sua mensagem foi enviada!',
        contact: 'Retornarei seu contato em breve!',
        sending: 'Enviando...',
        error: 'Sinto muito! Não foi possível enviar a sua mensagem!',
        close: 'Fechar',
      },
    };
    return texts[lang][type];
  }
}
