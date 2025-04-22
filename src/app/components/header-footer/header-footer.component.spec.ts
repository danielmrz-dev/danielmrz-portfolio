import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderFooterComponent } from "./header-footer.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslationsService } from "../../services/translations.service";
import { take } from "rxjs";

describe(HeaderFooterComponent.name, () => {

    let prot = HeaderFooterComponent.prototype;
    let component: HeaderFooterComponent;
    let service: TranslationsService;
    let fixture: ComponentFixture<HeaderFooterComponent>;
    let debugEl: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HeaderFooterComponent,
                BrowserAnimationsModule
            ],
            providers: [TranslationsService]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderFooterComponent);
        service = TestBed.inject(TranslationsService);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('(DOM)', () => {
        it('should change language when open the menu and click on another language', (done: DoneFn) => {
            const menu = debugEl.nativeElement.querySelector("[data-testId='menu-btn']");
            const event = new MouseEvent("click");
            menu.dispatchEvent(event);
            fixture.detectChanges();
            const ptBtn = debugEl.query(By.css("[data-testId='es']"))
            ptBtn.triggerEventHandler("click", new MouseEvent("click"));
            service.currentLanguage$.pipe(take(1)).subscribe((lang) => {
                expect(lang).toBe('es');
                done();
            })
        });

    });
    
    describe(`#${prot.changeLanguage.name}()`, () => {
        it('should call service method changeLanguage when called', () => {
            const spy = spyOn(service, 'changeLanguage')
            component.changeLanguage('es');
            expect(spy).toHaveBeenCalledWith('es');
        });
        
    });
    
});
