import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encores } from './encores';

describe('Encores', () => {
  let component: Encores;
  let fixture: ComponentFixture<Encores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encores],
    }).compileComponents();

    fixture = TestBed.createComponent(Encores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
