import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBuddyComponent } from './consult-buddy.component';

describe('ConsultBuddyComponent', () => {
  let component: ConsultBuddyComponent;
  let fixture: ComponentFixture<ConsultBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultBuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
