import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsTaskComponent } from './ls-task.component';

describe('LsTaskComponent', () => {
  let component: LsTaskComponent;
  let fixture: ComponentFixture<LsTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
