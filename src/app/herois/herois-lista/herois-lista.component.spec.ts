import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroisListaComponent } from './herois-lista.component';

describe('HeroisListaComponent', () => {
  let component: HeroisListaComponent;
  let fixture: ComponentFixture<HeroisListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroisListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
