import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { beforeEach, describe, expect, it } from 'vitest';
import { TranslationsService } from '../../services/translations.service';
import { HeaderFooterComponent } from './header-footer.component';

describe(HeaderFooterComponent.name, () => {
  // const prot = HeaderFooterComponent.prototype;
  let component: HeaderFooterComponent;
  let fixture: ComponentFixture<HeaderFooterComponent>;
  // let service: TranslationsService;
  // let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterComponent, BrowserAnimationsModule],
      providers: [TranslationsService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFooterComponent);
    component = fixture.componentInstance;
    // service = TestBed.inject(TranslationsService);
    // debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('(DOM)', () => {
  //   it('should change language when open the menu and click on another language', () => {
  //     return new Promise<void>((resolve) => {
  //       const menu = debugEl.nativeElement.querySelector(
  //         "[data-testId='menu-btn']",
  //       );
  //       const event = new MouseEvent('click');
  //       menu.dispatchEvent(event);
  //       fixture.detectChanges();
  //       const ptBtn = debugEl.query(By.css("[data-testId='es']"));
  //       ptBtn.triggerEventHandler('click', new MouseEvent('click'));
  //       service.currentLanguage$.pipe(take(1)).subscribe((lang) => {
  //         expect(lang).toBe('es');
  //         resolve();
  //       });
  //     });
  //   });
  // });

  // describe(`#${prot.changeLanguage.name}()`, () => {
  //     it('should call service method changeLanguage when called', () => {
  //         const spy = vi.spyOn(service, 'changeLanguage');
  //         component.changeLanguage('es');
  //         expect(spy).toHaveBeenCalledWith('es');
  //     });
  // });
});
