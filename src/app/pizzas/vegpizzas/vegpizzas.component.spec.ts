import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegpizzasComponent } from './vegpizzas.component';

describe('VegpizzasComponent', () => {
  let component: VegpizzasComponent;
  let fixture: ComponentFixture<VegpizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegpizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegpizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
