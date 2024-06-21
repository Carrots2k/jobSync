import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstatscardsComponent } from './allstatscards.component';

describe('AllstatscardsComponent', () => {
  let component: AllstatscardsComponent;
  let fixture: ComponentFixture<AllstatscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllstatscardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllstatscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
