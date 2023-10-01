import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealCareerComponent } from './reveal-career.component';

describe('RevealCareerComponent', () => {
  let component: RevealCareerComponent;
  let fixture: ComponentFixture<RevealCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevealCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevealCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
