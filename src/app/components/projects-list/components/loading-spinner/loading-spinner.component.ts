import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Language } from '../../../../models/language.type';
import { TranslationsService } from '../../../../services/translations.service';

@Component({
  selector: 'app-loading-spinner',
  imports: [NgxSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading = input.required<boolean>();
  private readonly spinner = inject(NgxSpinnerService);
  readonly translationsService = inject(TranslationsService);
  portfolioLink =
    'https://www.frontendmentor.io/profile/danielmrz-dev/solutions';

  ngOnInit(): void {
    this.spinner.show();
  }

  getTexts(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Nosso servidor tava no modo soneca. Estamos cutucando ele pra acordar! Por favor, aguarde.',
      en: 'Our server was in snooze mode. We’re poking it to wake up! Please, wait.',
      es: 'Nuestro servidor estaba en modo siesta. ¡Lo estamos pinchando para que despierte! Un momento, por favor.',
    };
    return text[lang];
  }

  getMaintenanceTexts(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Esta parte do meu portfolio está em manutenção. Para ver meus projetos, por favor acesse o link abaixo.',
      en: 'This section of my portfolio is under maintenance. To view my projects, please visit the link below.',
      es: 'Esta parte de mi portafolio está en mantenimiento. Para ver mis proyectos, por favor accede al enlace abajo.',
    };
    return text[lang];
  }

  getLinkText(lang: Language): string {
    const text: Record<Language, string> = {
      pt: 'Link para meus projetos',
      en: 'Link to my projects',
      es: 'Enlace para mis projectos',
    };
    return `${text[lang]} ↗️`;
  }
}
