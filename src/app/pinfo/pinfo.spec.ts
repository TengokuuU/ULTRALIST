import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInfo } from './pinfo';

describe('PInfo', () => {
  let component: PInfo;
  let fixture: ComponentFixture<PInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
