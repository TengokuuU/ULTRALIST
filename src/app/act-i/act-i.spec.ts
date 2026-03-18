import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActI } from './act-i';

describe('ActI', () => {
  let component: ActI;
  let fixture: ComponentFixture<ActI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActI],
    }).compileComponents();

    fixture = TestBed.createComponent(ActI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
