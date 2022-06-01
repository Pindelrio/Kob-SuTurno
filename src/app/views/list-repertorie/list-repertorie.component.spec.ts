import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepertorieComponent } from './list-repertorie.component';

describe('ListRepertorieComponent', () => {
  let component: ListRepertorieComponent;
  let fixture: ComponentFixture<ListRepertorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRepertorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepertorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
