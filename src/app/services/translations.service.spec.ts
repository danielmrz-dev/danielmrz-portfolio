import { TestBed } from "@angular/core/testing";
import { TranslationsService } from "./translations.service";
import { Language } from "../models/language.type";
import { take, toArray } from "rxjs";

describe(TranslationsService.name, () => {

    let service: TranslationsService;
    let prot = TranslationsService.prototype;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TranslationsService]
        })

        service = TestBed.inject(TranslationsService);
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`should initialize property with english language`, () => {
        service.currentLanguage$.subscribe((lang) => {
            expect(lang).toBe("en");
        })
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
