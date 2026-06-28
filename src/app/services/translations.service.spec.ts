import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { TranslationsService } from './translations.service';
import { beforeEach, describe, expect, it } from 'vitest';

describe(TranslationsService.name, () => {
  let service: TranslationsService;
  const prot = TranslationsService.prototype;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationsService],
    });

    service = TestBed.inject(TranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should initialize property with english language`, () => {
    service.currentLanguage$.subscribe((lang) => {
      expect(lang).toBe('en');
    });
  });

  describe(`#${prot.changeLanguage.name}()`, () => {
    it('should change language when called with a new language', () => {
      service.changeLanguage('pt');
      service.changeLanguage('en');
      service.changeLanguage('es');
      service.currentLanguage$.pipe(take(1)).subscribe((lang) => {
        expect(lang).toBe('es');
      });
    });
  });
});
