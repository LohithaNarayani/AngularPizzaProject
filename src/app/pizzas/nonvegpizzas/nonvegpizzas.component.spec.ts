import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegpizzasComponent } from './nonvegpizzas.component';

describe('NonvegpizzasComponent', () => {
  let component: NonvegpizzasComponent;
  let fixture: ComponentFixture<NonvegpizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegpizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegpizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
