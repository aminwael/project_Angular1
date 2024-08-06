import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFrameWorkComponent } from './start-frame-work.component';

describe('StartFrameWorkComponent', () => {
  let component: StartFrameWorkComponent;
  let fixture: ComponentFixture<StartFrameWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFrameWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartFrameWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
