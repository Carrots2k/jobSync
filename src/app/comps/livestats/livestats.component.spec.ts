import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestatsComponent } from './livestats.component';

describe('LivestatsComponent', () => {
  let component: LivestatsComponent;
  let fixture: ComponentFixture<LivestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivestatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
