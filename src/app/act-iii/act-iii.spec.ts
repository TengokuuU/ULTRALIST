import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActIII } from './act-iii';

describe('ActIII', () => {
  let component: ActIII;
  let fixture: ComponentFixture<ActIII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActIII],
    }).compileComponents();

    fixture = TestBed.createComponent(ActIII);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
