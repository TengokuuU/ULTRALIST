import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quit } from './quit';

describe('Quit', () => {
  let component: Quit;
  let fixture: ComponentFixture<Quit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quit],
    }).compileComponents();

    fixture = TestBed.createComponent(Quit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
