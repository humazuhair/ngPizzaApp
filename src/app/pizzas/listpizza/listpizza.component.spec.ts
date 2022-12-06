import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpizzaComponent } from './listpizza.component';

describe('ListpizzaComponent', () => {
  let component: ListpizzaComponent;
  let fixture: ComponentFixture<ListpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
