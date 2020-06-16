import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OferingComponent } from './ofering.component';

describe('OferingComponent', () => {
  let component: OferingComponent;
  let fixture: ComponentFixture<OferingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OferingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
