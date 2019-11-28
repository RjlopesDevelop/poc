import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroisFormComponent } from './herois-form.component';

describe('HeroisFormComponent', () => {
  let component: HeroisFormComponent;
  let fixture: ComponentFixture<HeroisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
