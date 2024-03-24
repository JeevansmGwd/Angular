import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberListComponent } from './number-list.component';

describe('NumberListComponent', () => {
  let component: NumberListComponent;
  let fixture: ComponentFixture<NumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
