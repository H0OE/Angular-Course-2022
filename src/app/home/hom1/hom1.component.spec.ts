import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hom1Component } from './hom1.component';

describe('Hom1Component', () => {
  let component: Hom1Component;
  let fixture: ComponentFixture<Hom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
