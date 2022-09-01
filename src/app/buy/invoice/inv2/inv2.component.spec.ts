import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inv2Component } from './inv2.component';

describe('Inv2Component', () => {
  let component: Inv2Component;
  let fixture: ComponentFixture<Inv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
