import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hom2Component } from './hom2.component';

describe('Hom2Component', () => {
  let component: Hom2Component;
  let fixture: ComponentFixture<Hom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
