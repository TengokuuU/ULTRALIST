import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectionmenu } from './selectionmenu';

describe('Selectionmenu', () => {
  let component: Selectionmenu;
  let fixture: ComponentFixture<Selectionmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selectionmenu],
    }).compileComponents();

    fixture = TestBed.createComponent(Selectionmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
