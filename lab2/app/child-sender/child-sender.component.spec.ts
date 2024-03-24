import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSenderComponent } from './child-sender.component';

describe('ChildSenderComponent', () => {
  let component: ChildSenderComponent;
  let fixture: ComponentFixture<ChildSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
