import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberGrind } from './cyber-grind';

describe('CyberGrind', () => {
  let component: CyberGrind;
  let fixture: ComponentFixture<CyberGrind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberGrind],
    }).compileComponents();

    fixture = TestBed.createComponent(CyberGrind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
