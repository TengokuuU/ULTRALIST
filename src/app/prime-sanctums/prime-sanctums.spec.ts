import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeSanctums } from './prime-sanctums';

describe('PrimeSanctums', () => {
  let component: PrimeSanctums;
  let fixture: ComponentFixture<PrimeSanctums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeSanctums],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeSanctums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
