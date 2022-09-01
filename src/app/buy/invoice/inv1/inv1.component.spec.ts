import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inv1Component } from './inv1.component';

describe('Inv1Component', () => {
  let component: Inv1Component;
  let fixture: ComponentFixture<Inv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
