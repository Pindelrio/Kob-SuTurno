import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepertorieComponent } from './create-repertorie.component';

describe('CreateRepertorieComponent', () => {
  let component: CreateRepertorieComponent;
  let fixture: ComponentFixture<CreateRepertorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRepertorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepertorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
