import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenRouteComponent } from './broken-route.component';

describe('BrokenRouteComponent', () => {
  let component: BrokenRouteComponent;
  let fixture: ComponentFixture<BrokenRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
