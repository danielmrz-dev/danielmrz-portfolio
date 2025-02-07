import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language.type';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  private language = new BehaviorSubject<Language>('en');
  currentLanguage$ = this.language.asObservable();

  changeLanguage(lang: Language) {
    this.language.next(lang);
  }

}
