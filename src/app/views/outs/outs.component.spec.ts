import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsComponent } from './outs.component';

describe('OutsComponent', () => {
  let component: OutsComponent;
  let fixture: ComponentFixture<OutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
