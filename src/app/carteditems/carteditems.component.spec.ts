import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteditemsComponent } from './carteditems.component';

describe('CarteditemsComponent', () => {
  let component: CarteditemsComponent;
  let fixture: ComponentFixture<CarteditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteditemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
