import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prelude } from './prelude';

describe('Prelude', () => {
  let component: Prelude;
  let fixture: ComponentFixture<Prelude>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prelude],
    }).compileComponents();

    fixture = TestBed.createComponent(Prelude);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
