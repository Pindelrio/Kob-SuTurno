import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRepertorieComponent } from './detail-repertorie.component';

describe('DetailRepertorieComponent', () => {
  let component: DetailRepertorieComponent;
  let fixture: ComponentFixture<DetailRepertorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRepertorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRepertorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
