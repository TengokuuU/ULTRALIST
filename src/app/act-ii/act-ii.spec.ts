import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActII } from './act-ii';

describe('ActII', () => {
  let component: ActII;
  let fixture: ComponentFixture<ActII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActII],
    }).compileComponents();

    fixture = TestBed.createComponent(ActII);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
