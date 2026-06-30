import { Service, signal } from '@angular/core';
import { Language } from '../models/language.type';
import { of } from 'rxjs';

@Service()
export class TranslationsService {
  public language = signal<Language>('en');
  currentLanguage$ = of();
  changeLanguage(lang: Language) {
    this.language.set(lang);
    console.log('Atual: ', this.language());
  }
}
