import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRecieverComponent } from './child-reciever.component';

describe('ChildRecieverComponent', () => {
  let component: ChildRecieverComponent;
  let fixture: ComponentFixture<ChildRecieverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRecieverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
