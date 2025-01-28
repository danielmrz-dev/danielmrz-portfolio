import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmailSentComponent } from './modal-email-sent.component';

describe('ModalEmailSentComponent', () => {
  let component: ModalEmailSentComponent;
  let fixture: ComponentFixture<ModalEmailSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEmailSentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEmailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
