import { Component, inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommonModule } from '@angular/common';
import { IFormData } from '../../models/form-data.interface';
import { Language } from '../../models/language.type';
import { TranslatedTexts } from '../../models/translation-texts.interface';
import { TranslationsService } from '../../services/translations.service';
import { ButtonWithBorderBottomComponent } from '../button-with-border-bottom/button-with-border-bottom.component';

@Component({
  selector: 'app-modal-email-sent',
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
  protected readonly data = inject<IFormData>(MAT_DIALOG_DATA);
  protected readonly translationsService = inject(TranslationsService);

  status = signal<string>(this.data['status'] as string);

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
